/* istanbul ignore file */
import type { Agent } from "./fetch";

/**
 * Имплементация взаимодействия с [API YooKassa](https://yookassa.ru/developers)
 *
 * @link {@see https://yookassa.ru/developers|Документация}
 */
export class Kassa {
  /**
   *
   * @param {string} merchantId
   * @param {string} secretKey
   * @param {string} [endpoint="https://api.yookassa.ru/v3"]
   * @param {Agent} [agent]
   */
  constructor(
    public merchantId: string,
    public secretKey: string,
    public readonly endpoint: string = "https://api.yookassa.ru/v3",
    public agent?: Agent
  ) {}
}
