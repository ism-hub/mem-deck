import { AnyAction } from 'redux';
import { PositionType } from '../directives/drag-drop.directive';

export class CardActionCreator {
  static readonly CARD_CHANGE_Z = 'CARD_CHANGE_Z';
  static readonly CARD_CHANGE_ISFACEUP = 'CARD_CHANGE_ISFACEUP';
  static readonly CARD_CHANGE_LOCATION = 'CARD_CHANGE_LOCATION';

  static ChangeZAction(value: number, id: number): AnyAction {
    return {type: CardActionCreator.CARD_CHANGE_Z, value, id};
  }

  static ChangeIsFaceUpAction(value: boolean, id: number): AnyAction {
    return {type: CardActionCreator.CARD_CHANGE_ISFACEUP, value, id};
  }

  static ChangeLocationAction(value: PositionType, id: number): AnyAction {
    return {type: CardActionCreator.CARD_CHANGE_LOCATION, value, id};
  }

}
