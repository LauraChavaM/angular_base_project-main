import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent {
  @Input() films: any[] = [];
  @Input() loading: boolean = false;
}