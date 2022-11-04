import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopLineComponent } from './components/top-line/top-line.component';
import { LineOfButtonsComponent } from './components/line-of-buttons/line-of-buttons.component';
import { LineOfBoardsComponent } from './components/line-of-boards/line-of-boards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { FilterBoardsPipe } from './pipes/filter-boards.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FullBoardInformationComponent } from './components/full-board-information/full-board-information.component';

const appRoutes:Routes = [{
  path: '', component: LineOfBoardsComponent, outlet: 'board-line'
}
// ,
// {
//   path: 'boards', component: FullBoardInformationComponent, outlet: 'full-board'
// }
]

@NgModule({
  declarations: [
    AppComponent,
    TopLineComponent,
    LineOfButtonsComponent,
    LineOfBoardsComponent,
    FooterComponent,
    BoardComponent,
    FilterBoardsPipe,
    FullBoardInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
