import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { TestBed } from '@angular/core/testing';

interface User {
  firstName: string,
  lastName: string,
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user: User = {
    firstName: 'abc',
    lastName: 'xyz',
    email: 'test@test.com',
    password: 'test1234',
  };

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async createAccount() {
    const user = await this.afAuth.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );

    console.log(user);
  }

}
