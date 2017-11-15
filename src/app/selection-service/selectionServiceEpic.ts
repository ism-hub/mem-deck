import { Epic, createEpicMiddleware } from 'redux-observable';
import { AnyAction, Store } from 'redux';
import { AppState } from '../state/model';
import { Observable } from 'rxjs/Observable';
import { SelectionServiceActionCreator } from './SelectionServiceActionCreator';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import { CardActionCreator } from '../card/CardActionCreator';

/*export const SelectionServiceEpic

  constructor() {}

  public createEpic() {
    return createEpicMiddleware(this.createLoadAnimalEpic(animalType));
  }

}*/

export const selectionServiceEpic = (action$, store: Store<AppState>) => {
 return action$.ofType(SelectionServiceActionCreator.SELECTION_SERVICE_CHANGE_SELECTED_CARD)
    .flatMap((action) => { return Observable.of(
                          CardActionCreator.ChangeZAction(store.getState().selectionService.maxZ + 1, action['value'].id),
                          SelectionServiceActionCreator.ChangeMaxZAction(store.getState().selectionService.maxZ + 1)
                        ); }
            );
};
