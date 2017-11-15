import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../services/alumno.service';
import {Cita} from '../models/cita';

@Component({
  selector:'agenda',
  templateUrl: '../views/agenda.html',
  styleUrls:['../css/agenda.css'],
  providers: [AlumnoService]
})

export class AgendaComponent implements OnInit{
  public titulo:string;
  public id:string;
  public matricula:string;
  public nombre:string;
  public msjError:string;
  public barraEstado:string;
  public citas:Cita[];
  public apellidos:string;

  constructor(private _alumnoService: AlumnoService){

    this.id=localStorage.getItem("id");
    this.nombre=localStorage.getItem("nombre");
    this.apellidos=localStorage.getItem("apellidos");
    this.matricula=localStorage.getItem("matricula");
  }
  ngOnInit(){

    this._alumnoService.getCitas().subscribe(
      res=>{
        this.citas=res.citas.sort(function (a, b) {
          if(a.fecha_hora < b.fecha_hora){
            return -1;
          }
          if(a.fecha_hora > b.fecha_hora){
            return 1;
          }
        return 0;
    });;
        //console.log(this.citas);
      },
      err=>{
        if (err.status==404) {
            this.barraEstado="No hay citas pendientes.";
            //console.log("no hay citas")
        }else{
          console.error(err)
          alert('Error en la peticionXD');
        }
      }
    );

  }
}
