import { Record, List } from 'immutable';

export class Card extends Record({id: -1, isFaceUp: false, z: -1, location: {x: 0, y: 0}}) {
  constructor(id?: number, isFaceUp?: boolean, z?: number, location?: {x: number, y: number}) {
    super({id, isFaceUp, z: z === -1 ? id : z, location});
  }
}

export class Deck extends Record({id: -1, cards: List<Card>()}) {
  constructor(id?: number, cards?: List<Card>) {
    super({id, cards});
  }
}

export class SelectionService extends Record({selectedCard: null, maxZ: -1}) {
  constructor(selectedCard?: Card, maxZ?: number) {
    super({selectedCard, maxZ});
  }
}

export class AppState extends Record({router: '', deck: null, selectionService: new SelectionService}) {
  constructor(router?: string, deck?: Deck, selectionService?: SelectionService) {
    super({router, deck, selectionService});
  }
}
