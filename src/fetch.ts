import nodeFetch from "node-fetch";
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

export async function fetch(
  url: string,
  params: QueryStringifiable,
  headers: Record<string, string> = {}
) {
  return await nodeFetch(url, {
    method: "POST",
    body: stringify(params),
    headers: {
      ...headers,

      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });
}
