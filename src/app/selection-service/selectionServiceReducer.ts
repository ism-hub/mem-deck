import { Card, SelectionService } from '../state/model';
import { AnyAction, Reducer } from 'redux';
import { SelectionServiceActionCreator } from './SelectionServiceActionCreator';
import { cardReducer } from '../card/cardReducer';

export const selectionServiceReducer: Reducer<SelectionService> = (state = new SelectionService, action: AnyAction): SelectionService => {
    let retState: SelectionService = state;
    switch (action.type) {
      case SelectionServiceActionCreator.SELECTION_SERVICE_CHANGE_SELECTED_CARD: retState = retState.set('selectedCard', action['value']); break;
      case SelectionServiceActionCreator.SELECTION_SERVICE_CHANGE_MAXZ: retState = retState.set('maxZ', action['value']); break;
    }

    const selectedCard = cardReducer(retState.selectedCard, action);
    retState = retState.set('selectedCard', selectedCard); // need to check that this not return new value if the set didnt change the state

    return retState;
  };
