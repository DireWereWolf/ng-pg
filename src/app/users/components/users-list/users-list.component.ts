import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private users = [];
  private usersObserver;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersObserver = this.usersService.getAll();
    this.usersObserver.subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }

}
