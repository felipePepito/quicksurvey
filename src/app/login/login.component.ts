import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(loginForm: NgForm, submitEvent): void {
    console.log(loginForm.value);
    console.log('submitted: ' + loginForm.submitted);
    console.log('valid: ' + loginForm.valid);
    console.log(submitEvent);
  }

}
