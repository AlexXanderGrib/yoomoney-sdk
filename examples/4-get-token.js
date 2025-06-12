const inquirer = require("inquirer").default;
const express = require("express");
const untun = require("untun");
const { API, Auth, AuthScope } = require("..");
const { createServer } = require("http");

const _ = console.log.bind(console);

const app = express();
const server = createServer(app);

run();

async function run() {
  console.clear();
  _("Подключение...");

  /**
   * @type {number}
   */
  const port = await new Promise((resolve) => {
    server.listen(0, () => {
      resolve(server.address().port);
    });
  });

  const redirectListener = "/ym";
  const tunnel = await untun.startTunnel({ port });
  const url = await tunnel.getURL();
  const redirectUrl = new URL(redirectListener, url).toString();

  console.clear();
  _("Для получения токена потребуются создать или изменить приложение в YooMoney");

  const { has_app } = await inquirer.prompt({
    name: "has_app",
    message: "У вас уже есть приложение?",
    type: "list",
    choices: [
      { name: "Да", value: "yes" },
      { name: "Нет", value: "no" }
    ]
  });

  if (has_app === "no") {
    console.clear();
    _("Создание приложения (1/2):");
    _(" 1. Откройте https://yoomoney.ru/myservices/new");
    _(' 2. В поле "Название для пользователей" введите "Test"');
    _(` 3. В поле "Адрес сайта" введите "${url}"`);
    _(
      ' 4. В поле "Почта для связи" введите "test@example.com" или любую вашу почту'
    );
    _(` 5. В поле "Redirect URI" введите "${redirectUrl}"`);
    _(" 6. Можете не устанавливать логотип");
    _(' 7. Включите "Проверять подлинность приложения (OAuth2 client_secret)"');
    _(' 8. Нажмите "Всё верно" и подтвердите создание приложения');
    _();
  } else {
    console.clear();
    _("Обновление приложения (1/2):");
    _(" 1. Откройте https://yoomoney.ru/settings?w=other");
    _(
      ' 2. В секции "Подписки и доступ к кошельку" > "Мои" выберите только что созданное приложение и нажмите "Настроить"'
    );
    _(" 3. Подтвердите действие на телефоне");
    _(` 4. В поле "Адрес сайта" введите "${url}"`);
    _(` 5. В поле "Redirect URI" введите "${redirectUrl}"`);
    _(' 6. Нажмите "Всё верно" и подтвердите действие на телефоне');
    _();
  }

  await inquirer.prompt({
    name: "_",
    message: "Для продолжения нажмите Enter"
  });

  console.clear();
  _("Получение данных (2/2):");
  _(" 1. Откройте https://yoomoney.ru/settings?w=other");
  _(
    ' 2. В секции "Подписки и доступ к кошельку" > "Мои" выберите только что созданное приложение и нажмите "Настроить"'
  );
  _(" 3. Подтвердите действие на телефоне");
  _(
    ' 4. Скопируйте "Идентификатор приложения (client_id)" и "OAuth2 client_secret" в терминал'
  );

  const { clientId, clientSecret } = await inquirer.prompt([
    {
      name: "clientId",
      message: "Идентификатор приложения (client_id)",
      type: "input",
      validate(value) {
        return /^[A-F\d]{64}$/.test(value);
      }
    },
    {
      name: "clientSecret",
      message: "OAuth2 client_secret",
      type: "input",
      validate(value) {
        return /^[A-F\d]{128}$/.test(value);
      }
    }
  ]);

  console.clear();

  const auth = new Auth(clientId, redirectUrl, clientSecret);

  app.all(redirectListener, async (req, res) => {
    const query = req.query;

    const fail = (error) => {
      console.error(error);
      return res.status(500).json({ ok: false, error: error.toString() });
    };

    if (query.error) {
      return fail(`Ошибка авторизации: ${query.error}`);
    }

    if (!query.code) {
      return fail(`Ошибка авторизации: Не получен код`);
    }

    try {
      const code = query.code;
      console.log("Получен код подтверждения:", code);
      const token = await auth.exchangeCode2Token(query.code);

      console.log("\n\n", "Получен токен:", token, "\n\n");
      return res.status(200).json({ ok: true, token });
    } catch (error) {
      return fail(error);
    }
  });

  while (true) {
    const { actions } = await inquirer.prompt({
      name: "actions",
      message: "Выберите действия",
      type: "checkbox",
      choices: [
        {
          name: "Выбрать права токена",
          value: "select"
        },
        {
          name: "Ввести или добавить права токена вручную",
          value: "manual"
        },
        {
          name: "Назвать токен (instance_name), чтобы не сбивать прошлые авторизации",
          value: "name"
        }
      ]
    });

    const {
      selectedScope = [],
      addedScope = [],
      instanceName
    } = await inquirer.prompt([
      {
        name: "selectedScope",
        when: actions.includes("select"),
        type: "checkbox",
        message: "Выберите права токена",
        choices: Object.values(AuthScope)
      },
      {
        name: "addedScope",
        message: "Введите дополнительные права токена через пробел",
        type: "input",
        filter(value) {
          return value.split(/\s+/);
        },
        when: actions.includes("manual")
      },
      {
        name: "instanceName",
        message: "Введите название токена (instance_name)",
        type: "input",
        when: actions.includes("name")
      }
    ]);

    const scope = [...selectedScope, ...addedScope];

    _("Подтвердите корректность введённых данных:");
    _(` Права токена(${scope.length}): ${scope.join(", ")}`);
    _(` Имя токена(instance_name): ${instanceName}`);

    const { isCorrect } = await inquirer.prompt({
      name: "isCorrect",
      message: "Правильно?",
      type: "confirm"
    });

    if (!isCorrect) continue;

    const url = auth.getAuthUrl(scope, instanceName);

    _("\n\n URL авторизации:", url);

    const { action } = await inquirer.prompt({
      name: "action",
      type: "list",
      message: "Ожидание токена. Выберите действие",
      choices: [
        { name: "Получить новый токен", value: "new" },
        { name: "Выйти", value: "exit" }
      ]
    });

    if (action === "exit") process.exit(0);
  }
}
