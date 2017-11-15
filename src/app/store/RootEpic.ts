import { Injectable } from '@angular/core';
import { selectionServiceEpic } from '../selection-service/selectionServiceEpic';
import { createEpicMiddleware } from 'redux-observable';

// import { ANIMAL_TYPES } from '../animals/model';
// import { AnimalAPIEpics } from '../animals/api/epics';

@Injectable()
export class RootEpics {
 //  constructor(private animalEpics: AnimalAPIEpics) {}

  public createEpics() {
    return [
      createEpicMiddleware(selectionServiceEpic)
     // this.animalEpics.createEpic(ANIMAL_TYPES.LION),
    ];
  }
}
