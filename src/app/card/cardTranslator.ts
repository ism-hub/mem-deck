


export class Card2Pic {
  static readonly suiteId2NameMap = new Map<number, string>([
    [1, 'clubs'],
    [2, 'diamonds'],
    [3, 'hearts'],
    [4, 'spades']
  ]);

 /* export class Card2Pic {
  static readonly suiteId2NameMap = new Map<number, string>([
    [1, '2'],
    [2, '3'],
    [3, '1'],
    [4, '0']
  ]);*/

 static readonly numberId2NameMap = new Map<number, string>([
    [1, 'ace'],
    [11, 'jack'],
    [12, 'queen'],
    [0, 'king']
  ]);

 /* static readonly numberId2NameMap = new Map<number, string>([
    [1, '1'],
    [11, '11'],
    [12, '12'],
    [0, '13']
  ]);*/

 // constructor() {}

  static id2Name(id: number): {numberName: string, suite: string} {
    const suite: string = Card2Pic.suiteId2NameMap.get(id % 13 === 0 ? (id / 13 | 0) : (id / 13 | 0) + 1);
 //   console.log(suite);
    const numberId = (id % 13);
    if (numberId > 1 && numberId < 11)
      return {numberName: '' + numberId, suite};
    return {numberName: Card2Pic.numberId2NameMap.get(numberId), suite};
  }

  static cardPicPath(id: number): string {
    const cardName = Card2Pic.id2Name(id);
   // return '/assets/png-cards/' + cardName.numberName + '_of_' + cardName.suite + '.png';
    return '/assets/svg-cards/' + cardName.numberName + '_of_' + cardName.suite + '.svg';
   // return '/assets/faces/' + cardName.suite + '_' + cardName.numberName + '.svg';
  }

}
