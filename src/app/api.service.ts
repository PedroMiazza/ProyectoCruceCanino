import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers }from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  lanzarPremio() {
    let headers = new Headers()
    headers.append('user-token', 'PmL3X&¡JlbjD&Z92nC¿r')
    let opts = new RequestOptions()
    opts.headers = headers
    return this.http.get('', opts).toPromise()
  }
  //Otra forma:
  //registroUsuario({name, surname, username, password, mail, address, age})
  registroUsuario(values) {
    return this.http.post('', values).toPromise()
  }
  //values -> {name: 'Mario, surname: 'Girón', username: 'Pichichi24', password: '1234', mail: 'correo@gmail.com', address: 'Gran Via 23', age: '35} 

  loginUsuario(values) {
    return this.http.post('', values).toPromise()

  }
}
