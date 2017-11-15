import { Card, Deck, AppState } from './state/model';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'app';
  $deck: Observable<Deck>;

  constructor(private _ngRedux: NgRedux<AppState>) {
    this.$deck = _ngRedux.select(state => state.deck);
  }
}
