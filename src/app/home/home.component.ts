import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <h2>Главная страница</h2>
      <p>Это главная страница сайта.</p>
    </mat-card>
  `
})
export class HomeComponent {}
