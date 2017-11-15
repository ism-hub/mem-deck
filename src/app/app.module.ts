import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DeckComponent } from './deck/deck.component';
import { DragCropDirective } from './directives/drag-drop.directive';
import { TableComponent } from './table/table.component';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './store/StoreModule';
import { RouterModule } from '@angular/router/src/router_module';
import { AppRoutingModule } from './AppRoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    CardComponent,
    HighlightDirective,
    DragCropDirective,
    DeckComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
