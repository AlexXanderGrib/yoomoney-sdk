import nodeFetch, { RequestInit, Response } from "node-fetch";
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

export type Agent = RequestInit["agent"];

/**
 *
 * @param {string} url URL адрес запроса
 * @param {QueryStringifiable} parameters Параметры запроса
 * @param {Record<string, string>=} [headers={}] Заголовки запроса
 * @param {Agent} [agent] Агент запроса
 *
 * @return {Promise<Response>} Ответ
 */
export async function fetch(
  url: string,
  parameters: QueryStringifiable,
  headers: Record<string, string> = {},
  agent?: Agent
): Promise<Response> {
  return await nodeFetch(url, {
    method: "POST",
    body: stringify(parameters),
    agent,
    headers: {
      ...headers,

      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    }
  });
}
