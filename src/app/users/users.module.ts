import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {routes} from './user-routes';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersPageComponent, UsersListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class UsersModule { }
