import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
        <ul>
          <li *ngFor="let person of people">{{ person.name }}</li>
        </ul>
      `,
})
export class AppComponent implements OnInit {
  people: any[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe((data) => {
      this.people = data.results;
    });
  }
}