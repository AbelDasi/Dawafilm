import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  forgotString : string = "Forgot your password?";
  name: string = "";
  passwd: string = "";
  labelMsg: string = "";
  validator: boolean  = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  changeButtonString(){
    this.forgotString="Set your password";
  }
  validateInputs(){
    if(this.name.trim() === "" || this.passwd.trim() === ""){
      this.labelMsg = "You cannot make that!";
      this.validator = false;
    }else{
      this.name = "";
      this.passwd = "";
      this.router.navigateByUrl("home");
      this.labelMsg = "";
    }
  }
  validateInputs2(){
    if(this.validator === false){
      if(this.name.trim() === "" || this.passwd.trim() === ""){
        this.labelMsg = "You cannot make that!";
        this.validator = false;
      }else{
        this.name = "";
        this.passwd = "";
        this.router.navigateByUrl("home");
        this.labelMsg = "";
      }
    }
  }
}
