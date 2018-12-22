import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContacto: FormGroup


  constructor(private apiService: ApiService) {
    this.formContacto = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(11),
        Validators.pattern(/^[0-9]*$/)
      ]),
      ciudad: new FormControl(''),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
      ]),
      password_repeat: new FormControl('', [
        Validators.pattern(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)
      ]),
      categoria: new FormControl(''),
      raza: new FormControl(''),
      edad: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/), this.edadValidator
      ]),
      color: new FormControl(''),
      sexo: new FormControl(''),
      opciones: new FormControl(''),
      message: new FormControl('')
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

  edadValidator(control){
    const edadMax = 29
    const edadMin = 1

    let edadNum = parseInt(control.value)

    if (edadNum < edadMin || edadNum > edadMax){
      return {
          edad:{
            edadMaxima: edadMax,
            edadMinima: edadMin
          }
      }
    }else {
      return null
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

  envioFormulario(){
    console.log(this.formContacto.value)
    console.log(this.formContacto.valid)
  }

}
