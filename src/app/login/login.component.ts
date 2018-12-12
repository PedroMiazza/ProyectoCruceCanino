import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(private apiService: ApiService) {
    this.formLogin = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
      ])
    })  
  }
   
validatorPasswordRepeat(group) {
  if(group.controls.password.value === group.controls.password_repeat.value) {
    return null
  } else {
    return { passwordRepeat: true }
  }
}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formLogin.value)
    this.apiService.loginUsuario(this.formLogin.value).then(response => {
      console.log(response.json())
      
    })
  }

}