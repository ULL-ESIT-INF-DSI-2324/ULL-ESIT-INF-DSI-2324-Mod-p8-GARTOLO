/**
 * @interface IEvent - Define generic events
 */
export default interface IEvent<T> {
  id: string;
  data: T;
}