import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  mostrarU: any;
  mostrarP: any;


  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { 

    // this.api.recogeUsuarios().then((res) => {
    //   this.mostrarU = res.json()
    //   // console.log(res.json())
    // })

    // this.api.recogePerros().then((res) => {
    //   this.mostrarP = res.json()
    //   // console.log(res.json())
    // })

    this.activatedRoute.params.subscribe(params => {
      let idUsuario = params.idusuario
      this.api.recogeUsuarioPorId(idUsuario).then(res => {
        this.mostrarU = res.json()
        console.log(this.mostrarU);
      })
      this.api.recogePerrosPorUsuario(idUsuario).then(res => {
        this.mostrarP = res.json()
        console.log(this.mostrarP);
      })
    })  

  }

  ngOnInit() {
  }

}
