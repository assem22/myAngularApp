import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './service/user.service';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myAngular';
  users: User[];

  user: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    address1: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    console.log(this.user.getRawValue());
    this.service.get().subscribe(res => {
      this.users = res;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(data => {
      this.getUserList();
    });
  }
}
