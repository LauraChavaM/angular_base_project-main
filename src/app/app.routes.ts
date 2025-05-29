import { Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

export const routes: Routes = [
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'films',
    component: FilmsListComponent
  },
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  }
];