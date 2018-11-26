import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContacto: FormGroup


  constructor(private apiService: ApiService) {
    this.formContacto = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl(''),
      categoria: new FormControl(''),
      raza: new FormControl(''),
      age: new FormControl(''),
      color: new FormControl(''),
      sexo: new FormControl(''),
      opciones: new FormControl(''),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      password_repeat: new FormControl(''),
    }, {
      validators: [ this.validatorPasswordRepeat ]
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
    console.log(this.formContacto.value)
    this.apiService.registroUsuario(this.formContacto.value).then(response => {
      console.log(response.json())
    })
  }

}
