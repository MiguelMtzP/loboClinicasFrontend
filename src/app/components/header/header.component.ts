import { Component } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
  public nombre: string;
  public matricula:string;
  public apellidos:string;
  public id: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.nombre=localStorage.getItem("nombre");
    this.apellidos=localStorage.getItem("apellidos");
    this.matricula=localStorage.getItem("matricula");
    this.id=localStorage.getItem('id');
  }
  cerrarsesion(){
    localStorage.clear();
    console.log("sesion Terminada");
    this._router.navigate(["/"]);
  }
}
