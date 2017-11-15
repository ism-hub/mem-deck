
import { combineReducers, Reducer, AnyAction } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { AppState, Deck, SelectionService } from '../state/model';
import { deckReducer } from '../deck/deckReducer';
import { selectionServiceReducer } from '../selection-service/selectionServiceReducer';

// import { createAnimalAPIReducer } from '../animals/api/reducer';
// import { ANIMAL_TYPES } from '../animals/model';

const rootReducer2: Reducer<AppState> = (state = new AppState, action: AnyAction): AppState => {
  const deck: Deck = deckReducer(state.deck, action);
  const router: string = routerReducer(state.router, action);
  const selectionService: SelectionService = selectionServiceReducer(state.selectionService, action);

  return state.set('deck', deck).set('router', router).set('selectionService', selectionService);
 // if ((deck === state.deck) && (state.router === router) && (state.selectionService === selectionService)) { // if there are no changes
 //   return state;
 // }
 //  return new AppState(router, deck, );
};

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
//   combineReducers({n
//    garden: gardenReducer,
//    router: routerReducer,
//  })
  rootReducer2
);


