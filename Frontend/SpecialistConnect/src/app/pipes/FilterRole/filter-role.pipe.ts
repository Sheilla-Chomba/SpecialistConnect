import { Pipe, PipeTransform } from '@angular/core';
import { users } from '../../interfaces/user';

@Pipe({
  name: 'filterRole',
  standalone: true
})
export class FilterRolePipe implements PipeTransform {

 transform(users: users[], name: string): users[]{
    if (!users || name == '') {
      return users;
    }
  

    const filtered: users[] = [];

    for (let user of users) {
      if ((user.role).toLowerCase().includes(name.toLowerCase())) {
        filtered.push(user);
      } 
    }

    return filtered;
  }
}
