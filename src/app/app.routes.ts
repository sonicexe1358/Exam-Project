import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersTableComponent },
  { path: 'form', component: FormDemoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
