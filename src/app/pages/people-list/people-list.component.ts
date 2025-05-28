import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

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
    this.swapi.getPeople().subscribe((data: any) => {
      this.people = data.results;
    });
  }

  viewDetail(person: any) {
    this.selectedPerson = person;
    this.loadingFilms = true;
    this.films = [];
    if (person.films && person.films.length > 0) {
      forkJoin(person.films.map((url: string) => this.swapi.getFilmByUrl(url))).subscribe(
        (films) => {
          this.films = films as any[];
          this.loadingFilms = false;
        },
        () => {
          this.films = [];
          this.loadingFilms = false;
        }
      );
    } else {
      this.films = [];
      this.loadingFilms = false;
    }
  }

  closeDetail() {
    this.selectedPerson = null;
    this.films = [];
  }
}