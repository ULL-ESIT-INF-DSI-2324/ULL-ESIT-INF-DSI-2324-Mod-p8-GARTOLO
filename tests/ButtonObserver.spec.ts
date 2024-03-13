import { expect } from 'chai';
import { ButtonClickEventType, ButtonObserver } from "../src/ButtonObserver.js";
import IEvent from '../src/interfaces/IEvent.js';
import {Observable} from '../src/Observable.js'

describe('Testing button observer ', () => {
  const data: IEvent<ButtonClickEventType> = {
    id: "1",
    data: 1
  }

  const observable = new Observable(data);
  const firstObserver = new ButtonObserver(data);
  
  console.log('firstButtonObserver subscription');
  observable.subscribe(firstObserver);

  it('Get the notification on leftclick', () => {
    expect(observable.notify(data)).to.equal(undefined);
  })
  
});