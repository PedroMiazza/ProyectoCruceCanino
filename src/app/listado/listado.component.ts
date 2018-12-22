import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  mostrarT: any;
  perros: any[]

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {

    let tipo = this.router.url.split('/')

    if (tipo[2] === 'adoptar') {
      this.api.mostrarAdoptar().then(res => {
        this.perros = res.json()
        console.log(this.perros)
      })  
    } else {
      this.api.mostrarCruzar().then(res => {
        this.perros = res.json()
        console.log(this.perros)
      })
    }

    this.api.recogeUsuarios().then(res => {
      this.mostrarT = res.json()
      console.log(this.mostrarT);
    })
    
  }

  ngOnInit() {
  }

}
