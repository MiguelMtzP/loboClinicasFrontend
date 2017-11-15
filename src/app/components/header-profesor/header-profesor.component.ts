import { Component} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-header-profesor',
  templateUrl: './header-profesor.component.html',
  styleUrls: ['./header-profesor.component.css']
})
export class HeaderProfesorComponent {

  public nombre: string;
  public correo:string;
  public apellidos:string;
  public id: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.nombre=localStorage.getItem("nombre");
    this.apellidos=localStorage.getItem("apellidos");
    this.correo=localStorage.getItem("correo");
    this.id=localStorage.getItem('id');
  }
  cerrarsesion(){
    localStorage.clear();
    //console.log("sesion Terminada");
    this._router.navigate(["profesor"]);
  }
}
