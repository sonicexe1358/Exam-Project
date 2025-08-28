import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { EmailDomainPipe } from '../email-domain.pipe';
import { ServiceUsersService, User } from '../service-users.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, EmailDomainPipe],
  template: `
    <h2>Список пользователей</h2>
    <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

      <ng-container matColumnDef="firstname">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Имя</th>
        <td mat-cell *matCellDef="let user">{{ user.firstname }}</td>
      </ng-container>

      <ng-container matColumnDef="lastname">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Фамилия</th>
        <td mat-cell *matCellDef="let user">{{ user.lastname }}</td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
        <td mat-cell *matCellDef="let user">{{ user.email | emailDomain }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

    <mat-paginator [pageSizeOptions]="[5, 10, 20]"></mat-paginator>
  `
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: ServiceUsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(res => {
      this.dataSource.data = res.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
