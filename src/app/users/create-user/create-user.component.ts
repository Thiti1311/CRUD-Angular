import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request!: RequestCreate;

  response!: ResponseCreate;

  constructor (private userService: UserService) { }

  ngOnInit() { }

  save() {
    console.log(this.request);
    this.userService.createUsers(this.request).subscribe({
        next: (res) => {
          this.response = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
