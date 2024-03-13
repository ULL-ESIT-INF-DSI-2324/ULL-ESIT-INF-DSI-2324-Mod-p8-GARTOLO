import { ButtonClickEventType, ButtonObserver } from "./ButtonObserver.js";
import { Observable } from "./Observable.js";
import IEvent from "./interfaces/IEvent.js";


const data: IEvent<ButtonClickEventType> = {
  id: "1",
  data: 1
}
const observable = new Observable(data);
const firstObserver = new ButtonObserver(data);

console.log('firstButtonObserver subscription');
observable.subscribe(firstObserver);

console.log('observable left click');
observable.notify(data);

