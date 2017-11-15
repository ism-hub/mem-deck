import { AnyAction } from 'redux';
import { PositionType } from '../directives/drag-drop.directive';
import { Card } from '../state/model';

export class SelectionServiceActionCreator {
  static readonly SELECTION_SERVICE_CHANGE_SELECTED_CARD = 'SELECTION_SERVICE_CHANGE_SELECTED_CARD';
  static readonly SELECTION_SERVICE_CHANGE_MAXZ = 'SELECTION_SERVICE_CHANGE_MAXZ';

  static ChangeSelectionAction(value: Card): AnyAction {
    return {type: SelectionServiceActionCreator.SELECTION_SERVICE_CHANGE_SELECTED_CARD, value};
  }

  static ChangeMaxZAction(value: number): AnyAction {
    return {type: SelectionServiceActionCreator.SELECTION_SERVICE_CHANGE_MAXZ, value};
  }
}
