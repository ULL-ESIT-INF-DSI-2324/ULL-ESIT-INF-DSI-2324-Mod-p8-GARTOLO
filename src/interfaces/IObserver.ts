import IEvent from "./IEvent.js";

/**
 * @interface IObserver for observer classes
 */
export default interface IObserver<T> {
  update(event: IEvent<T>): void;
}