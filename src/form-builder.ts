import type { URL } from "url";

function uniqueId() {
  const dict = "QWERTYUIOPASDFGHJKLZXVBNM1234567890";

  return new Array(8)
    .fill("")
    .map(() => dict[Math.floor(Math.random() * dict.length)])
    .join("");
}

export class FormBuilder {
  constructor(
    public url: string = "",
    public method: string = "POST",
    public fields: Record<string, string> = {}
  ) {}

  setURL(url: string | URL) {
    this.url = url.toString();
    return this;
  }

  setMethod(method: string) {
    this.method = method;
    return this;
  }

  setField(name: string, value: string) {
    this.fields[name] = value;
    return this;
  }

  buildHtml() {
    const fields = Object.entries(this.fields).map(
      ([key, value]) => `<input type="hidden" name="${key}" value="${value}" />`
    );
    const id = `form${uniqueId()}`;

    return `<form method="${this.method}" action="${this.url}" id="${id}">
    ${fields.join("\n")}
</form>

<script>(function(){ document.getElementById('${id}').submit(); })();</script>`;
  }
}
