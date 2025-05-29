import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    PeopleListComponent,
    FilmsListComponent
  ],
  providers: [],
})
export class AppModule { }