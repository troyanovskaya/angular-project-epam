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

@NgModule({
  declarations: [
    AppComponent,
    TopLineComponent,
    LineOfButtonsComponent,
    LineOfBoardsComponent,
    FooterComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
