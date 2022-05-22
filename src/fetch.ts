// import nodeFetch, { RequestInit, Response } from "node-fetch";
import axios from "axios";
import { stringify } from "querystring";
export type QueryStringifiable = Record<
  string,
  | string
  | number
  | boolean
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | ReadonlyArray<boolean>
  | null
  | undefined
>;

export type Agent = any;

/**
 *
 * @param {string} url URL адрес запроса
 * @param {QueryStringifiable} parameters Параметры запроса
 * @param {Record<string, string>=} [headers={}] Заголовки запроса
 * @param {Agent} [agent] Агент запроса
 *
 * @return {Promise<any>} JSON в ответе
 */
export async function fetch(
  url: string,
  parameters: QueryStringifiable,
  headers: Record<string, string> = {},
  agent?: Agent
): Promise<any> {
  return await axios
    .post(url, stringify(parameters), {
      headers: {
        "User-Agent": process.env.USER_AGENT_STRING || "yoomoney-sdk/test",
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      },
      httpAgent: agent,
      httpsAgent: agent,
      responseType: "json"
    })
    .then((response) => response.data)
    .catch((error) =>
      axios.isAxiosError(error) && error.response
        ? error.response.data
        : Promise.reject(error)
    );
}
