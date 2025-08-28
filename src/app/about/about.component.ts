import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, HighlightDirective],
  template: `
    <mat-card appHighlight="lightblue">
      <h2>О себе</h2>
      <p>Я начинающий программист и уже имею одну научную статью в школьной секции по МНСК.</p>
    </mat-card>
  `
})
export class AboutComponent {}
