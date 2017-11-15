import { Card, Deck } from '../state/model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckComponent implements OnInit {

  @Input() readonly deck: Deck;

  constructor() { }

  ngOnInit() {
  }

  getKey(_, card: Card) {
    return card.id;
  }

}
