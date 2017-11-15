import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Deck, Card, AppState } from '../state/model';
import { List } from 'immutable';
import { NgRedux } from '@angular-redux/store';
import { CardActionCreator } from '../card/CardActionCreator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() readonly deck: Deck;

  constructor(private _ngRedux: NgRedux<AppState>) {
  }
  ngOnInit() {}

  onClick() {
    this.deck.cards.forEach((card) => this._ngRedux.dispatch(CardActionCreator.ChangeLocationAction({x: 0, y: 0}, card.id)) );
  }
}
