import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  template: `
    <div class="page-wrapper">
      <div class="form-container">
        <h2>Отправка данных</h2>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <div class="form-group">
            <label for="name">Имя</label>
            <mat-form-field appearance="outline" class="full-width">
              <input matInput id="name" formControlName="name">
            </mat-form-field>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <mat-form-field appearance="outline" class="full-width">
              <input matInput id="email" formControlName="email">
            </mat-form-field>
          </div>

          <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">
            Отправить
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 40px 20px;
      background: #f5f5f5;
    }

    .form-container {
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    h2 {
      text-align: center;
      margin-bottom: 24px;
      font-weight: 500;
      color: #333;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    .form-group input {
      width: 80%;           
      margin-left: 10px;
      margin-top: 8px; 
      height: 64px;         
      font-size: 16px;
      padding: 0 12px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }

    .form-group label {
      margin-bottom: 6px;
      font-weight: 500;
      color: #555;
    }

    .full-width {
      width: 100%;
      height: 56px;
    }


    button {
      align-self: flex-start;
      padding: 0 24px;
    }

    @media (max-width: 480px) {
      .form-container {
        padding: 20px;
      }
    }
  `]
})
export class FormDemoComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.snackBar.open(`Данные отправлены!`, 'OK', { duration: 3000 });
    }
  }
}
