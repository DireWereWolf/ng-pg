import {Routes} from '@angular/router';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {UsersListComponent} from './components/users-list/users-list.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'users/all',
    component: UsersListComponent
  }
];
