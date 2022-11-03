import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopLineComponent } from './components/top-line/top-line.component';
import { LineOfButtonsComponent } from './components/line-of-buttons/line-of-buttons.component';
import { LineOfBoardsComponent } from './components/line-of-boards/line-of-boards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { FilterBoardsPipe } from './pipes/filter-boards.pipe';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TopLineComponent,
    LineOfButtonsComponent,
    LineOfBoardsComponent,
    FooterComponent,
    BoardComponent,
    FilterBoardsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
