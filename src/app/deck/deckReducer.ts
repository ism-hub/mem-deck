import { Deck } from '../state/model';
import { Reducer, AnyAction } from 'redux';
import { cardReducer } from '../card/cardReducer';

export const deckReducer: Reducer<Deck> = (state = new Deck, action: AnyAction): Deck => {

  let retState: Deck = state;

  // passing the action to the cards
    const cards = retState.cards.update(state.cards.findIndex((card) => cardReducer(card, action) !== card),
      (oldCard) => cardReducer(oldCard, action));

    if (cards !== retState.cards)
      retState = retState.set('cards', cards);

  return retState;
};
