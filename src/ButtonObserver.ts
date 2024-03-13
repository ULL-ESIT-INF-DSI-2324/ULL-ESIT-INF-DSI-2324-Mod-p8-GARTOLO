import IEvent from "./interfaces/IEvent.js";
import IObserver from "./interfaces/IObserver.js";

export enum ButtonClickEventType {
  "NO_EVENT",
  "LEFTCLICK",
  "RIGHTCLICK",
  "CENTERCLICK",
}

/**
 * @class ButtonObserver to implements button click events
 */
export class ButtonObserver implements IObserver<ButtonClickEventType> {
  constructor(private event: IEvent<ButtonClickEventType>) {}

  getId() {
    return this.event.id;
  }

  getData() {
    this.event.data;
  }

  update(event: IEvent<ButtonClickEventType>): void {
    switch (event.data) {
      case ButtonClickEventType.LEFTCLICK:
        console.log(
          `I am a ButtonObserver with id ${this.getId()} ` +
            `and I have observed that Button ${event.id} ` +
            `was left-clicked with the mouse`,
        );
        break;
      case ButtonClickEventType.RIGHTCLICK:
        console.log(
          `I am a ButtonObserver with id ${this.getId()} ` +
            `and I have observed that Button ${event.id} ` +
            `was right-clicked with the mouse`,
        );
        break;
      case ButtonClickEventType.CENTERCLICK:
        console.log(
          `I am a ButtonObserver with id ${this.getId()} ` +
            `and I have observed that Button ${event.id} ` +
            `was center-clicked with the mouse`,
        );
        break;
    }
  }
}
