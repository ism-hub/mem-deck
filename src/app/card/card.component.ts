import { Card, AppState } from '../state/model';
import { Card2Pic } from './cardTranslator';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { PositionType } from '../directives/drag-drop.directive';
import { NgRedux } from '@angular-redux/store';
import { CardActionCreator } from './CardActionCreator';
import { AfterContentInit } from '@angular/core';
import { SelectionServiceActionCreator } from '../selection-service/SelectionServiceActionCreator';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterContentInit {

  _card: Card;
  @Input()
  set card(card: Card) {
    this._card = card;
    this.currentPicPath = 'url("' + (this.card.isFaceUp ? Card2Pic.cardPicPath(this.card.id) : '/assets/svg-cards/Red_Back.svg') + '")';
  }
  get card(): Card { return this._card; }

  currentPicPath: string;

  // facePicPath: string;
  // backPickPath: string;
  clickDuration: number;

  constructor(private _ngRedux: NgRedux<AppState>) {
    // this.backPickPath = 'url("/assets/svg-cards/Red_Back.svg")';
  }

  ngOnInit() {
    this.currentPicPath = 'url("' + (this.card.isFaceUp ? Card2Pic.cardPicPath(this.card.id) : '/assets/svg-cards/Red_Back.svg') + '")';
    // this.facePicPath = this.currentPicPath;
    // console.log(this.picPath);
  }

  ngAfterContentInit(): void {

  }

  onClick(event: MouseEvent): void {
    if (event.type === 'mousedown') {
      this.clickDuration = new Date().getTime();
      this._ngRedux.dispatch(SelectionServiceActionCreator.ChangeSelectionAction(this.card));
    } else if (event.type === 'mouseup')
      this.clickDuration = new Date().getTime() - this.clickDuration;
    else throw new Error('The events we listenning to suppose to be mouseDown and mouseUp only');
    if (event.type === 'mouseup' && this.clickDuration < 100) {
      this._ngRedux.dispatch(CardActionCreator.ChangeIsFaceUpAction(!this.card.isFaceUp, this.card.id));
     // if (this.currentPicPath === this.facePicPath)
     //   this.currentPicPath = this.backPickPath;
     // else this.currentPicPath = this.facePicPath;
    }
  }

  onLocationChange(location: PositionType) {
    if ((location !== undefined) && (location.x === this.card.location.x ) && (location.y === this.card.location.y))// if no change
      return;
    this._ngRedux.dispatch(CardActionCreator.ChangeLocationAction(location, this.card.id));
  }
}
