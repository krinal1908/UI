import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

 // username:string;
  //password:string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(username,password){
    this.submitted = true;

      // stop here if form is invalid
    if(this.registerForm.invalid) {
        return;
    }

    if(username =="admin" && password == "pass123")
    {
      console.log("inside if");
        alert("Welcome");
      this.router.navigateByUrl('/edit');

    }
    else{
      // alert("Incorrect Credentials");
      this.router.navigateByUrl('/login');
      alert("Incorrect Credentials");

    }
    
  }

}
