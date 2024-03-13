import IEvent from "./IEvent.js";
import Observer from "./IObserver.js";

/**
 * @interface IObservable for observable classes
 */
export default interface IObservable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event: IEvent<T>): void;
}