import { Component, OnInit } from '@angular/core';
import { User } from "../lib/model/user";
import { UserService } from '../lib/user.service';

@Component({
  selector: 'lib-user-lib',
  template: `
  <table>
      <thead>
          <th>Name</th>
          <th>Index</th>
      </thead>
      <tbody>
          <tr *ngFor="let user of users">
              <td>{{user.name}}</td>
          </tr>
      </tbody>
  </table>
`,
  styles: []
})
export class UserLibComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    console.log("get users");
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(arg => this.users = arg);
  }

}
