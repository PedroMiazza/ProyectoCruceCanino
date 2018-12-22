import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers }from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  loguearse() {
    let headers = new Headers()
    headers.append('user-token', '')
    let opts = new RequestOptions()
    opts.headers = headers
    return this.http.get('', opts).toPromise()
  }
  //Otra forma:
  //registroUsuario({email, password})
  registroUsuario(values) {
    //console.log('Dentro del SERVICIO')
    return this.http.post('http://localhost:3000/api/usuarios/', values).toPromise()
  }
   
  loginUsuario(values) {
    return this.http.post('http://localhost:3000/api/login/', values).toPromise()
    //values -> {mail: 'correo@gmail.com', password: '1234'}
  }

  recogeUsuarios() {
    return this.http.get('http://localhost:3000/api/usuarios').toPromise()
  }

  recogePerros() {
    return this.http.get('http://localhost:3000/api/perros').toPromise()
  }

  mostrarAdoptar() {
    return this.http.get('http://localhost:3000/api/perros/listado/adoptar').toPromise()
  }

  mostrarCruzar() {
    return this.http.get('http://localhost:3000/api/perros/listado/cruzar').toPromise()
  }

  recogeUsuarioPorId(idUsuario) {
    return this.http.get('http://localhost:3000/api/usuarios/'+idUsuario).toPromise()
  }

  recogePerrosPorUsuario(idUsuario) {
    return this.http.get('http://localhost:3000/api/perros/usuario/'+idUsuario).toPromise()
  }
  
}
