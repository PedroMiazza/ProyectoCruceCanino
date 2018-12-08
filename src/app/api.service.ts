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
    return this.http.post('', values).toPromise()
  }
  //values -> {mail: 'correo@gmail.com', password: '1234'} 

  loginUsuario(values) {
    return this.http.post('', values).toPromise()

  }
}
