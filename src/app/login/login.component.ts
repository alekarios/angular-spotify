import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any[];
  validation = false;

  constructor(public router: Router, private userService: UsersService) { }


  onSubmit(form: NgForm) {

    for (let  i = 0; i < this.data.length; i++) {
      if (form.value.usernameInput === this.data[i].username && form.value.passwordInput === this.data[i].password) {
        console.log(`Hello ${this.data[i].username}`);
        this.router.navigate(['/user/', this.data[i].username]);
        break;
      // tslint:disable-next-line:triple-equals
      } else if (form.value.usernameInput !== '' && form.value.passwordInput !== '') {
        this.validation = true;
      }
    }

  }

  ngOnInit() {
    this.userService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
   }


}

