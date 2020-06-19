import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    address1: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private route: ActivatedRoute, private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.service.create(this.user.getRawValue()).subscribe(res => {
      alert(res.name);
    });
  }

  // createUser() {
  //   this.create();
  //   this.getUserList();
  // }
  //
  // private getUserList() {
  //   this.router.navigate(['']);
  // }
}
