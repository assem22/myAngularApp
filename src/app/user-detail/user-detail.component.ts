import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../models/user.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private service: UserService, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.user = new User();
    this.service.getById(this.id)
      .subscribe(res => {
        console.log(res);
        this.user = res; }, error => console.log(error));
  }
  updateUser() {
    this.service.update(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.updateUser();
    this.gotoList();
  }

  gotoList() {
    // this.router.navigate(['main/']);
    this.location.back();
  }

}
