import { Card } from '../state/model';
import { AnyAction, Reducer } from 'redux';
import { CardActionCreator } from './CardActionCreator';

export const cardReducer: Reducer<Card> = (state = new Card, action: AnyAction): Card => {
    let retState: Card = state;
    if (state !== null && state.id === action['id'])
    switch (action.type) {
      case CardActionCreator.CARD_CHANGE_ISFACEUP: retState = retState.set('isFaceUp', action['value']); break;
      case CardActionCreator.CARD_CHANGE_LOCATION: retState = retState.set('location', action['value']); break;
      case CardActionCreator.CARD_CHANGE_Z: retState = retState.set('z', action['value']); break;
    }
    return retState;
  };
