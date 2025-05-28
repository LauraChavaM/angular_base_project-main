import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  selectedPerson: any = null;
  films: any[] = [];
  loadingFilms = false;

  constructor(private swapi: SwapiService) {}

  ngOnInit() {
    this.swapi.getAllPeople().subscribe(data => {
      this.people = data;
    });
  }

  viewDetail(person: any) {
    this.selectedPerson = person;
    this.loadingFilms = true;
    this.films = [];
    this.swapi.getFilms(person.films).subscribe(films => {
      this.films = films;
      this.loadingFilms = false;
    });
  }

  closeDetail() {
    this.selectedPerson = null;
    this.films = [];
  }
}