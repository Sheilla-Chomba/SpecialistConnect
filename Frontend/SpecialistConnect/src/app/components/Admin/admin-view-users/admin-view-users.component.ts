import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { users } from '../../../interfaces/user';
import { UserServiceService } from '../../../services/User-Service/user-service.service';

@Component({
  selector: 'app-admin-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-view-users.component.html',
  styleUrl: './admin-view-users.component.css',
})
export class AdminViewUsersComponent {
  users: users[] = [];

  constructor(private api: UserServiceService) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.api.getUsers().subscribe((res) => {
      console.log(res);

      this.users = res.users;
    });
  }
}
