import IEvent from "./interfaces/IEvent.js";
import IObservable from "./interfaces/IObservable.js";
import IObserver from "./interfaces/IObserver.js";

/**
 * @class Observable - Implements an observable
 */
export class Observable<T> implements IObservable<T> {
  private observers: IObserver<T>[] = [];

  constructor(private event: IEvent<T>) {}

  /**
   * Function to get the event Id
   * @returns id
   */
  getId() {
    return this.event.id;
  }

  /**
   * Function to get the event type (data)
   * @returns data
   */
  getEventType() {
    return this.event.data;
  }

  /**
   * Subscribe an observer
   * @param observer to subscribe
   */
  subscribe(observer: IObserver<T>) {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Unsuscribe an observer
   * @param observer to unsuscribe
   */
  unsubscribe(observer: IObserver<T>) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Send an event
   * @param event to send
   */
  notify(event: IEvent<T>) {
    this.observers.forEach((observer) => observer.update(event));
  }
}
