// import { NotificationChecker, NotificationDTO } from "./notifications";

// /**
//  *
//  *
//  * @export
//  * @class MultiProcessor
//  * @template T
//  */
// export class MultiProcessor<T extends { secret: string }> {
//   /**
//    * Creates an instance of MultiProcessor.
//    * @param {Function} _resolveSecret
//    * @memberof MultiProcessor
//    */
//   constructor(private readonly _resolveSecret: (label: string) => Promise<T>) {}

//   /**
//    *
//    *
//    * @param {NotificationDTO} notification
//    * @return {Promise<[NotificationDTO, T]>}
//    * @memberof MultiProcessor
//    */
//   async process(
//     notification: Record<keyof NotificationDTO, string>
//   ): Promise<[nf: NotificationDTO, receiver: T]> {
//     const receiver = await this._resolveSecret(notification.label);
//     const checker = new NotificationChecker(receiver.secret);
//     const result = checker.check(notification);

//     return [result, receiver];
//   }
// }
export {};
