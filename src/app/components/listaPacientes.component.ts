import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../services/alumno.service';
import {Paciente} from '../models/paciente';

@Component({
  selector:'listaPacientes',
  templateUrl: '../views/listaPacientes.html',
  styleUrls:['../css/listaPacientes.css'],
  providers: [AlumnoService]
})

export class listaPacientesComponent implements OnInit{

  public pacientes:Paciente[];
  public msjError:string;
  public barraEstado:string;

  constructor(private _alumnoService: AlumnoService){


  }
  ngOnInit(){

    this._alumnoService.getPacientes().subscribe(
      res=>{
        //this.pacientes=res.pacientes;
        this.pacientes=res.pacientes.sort(function (a, b) {
          if(a.apellidos < b.apellidos){
            return -1;
          }
          if(a.apellidos > b.apellidos){
            return 1;
          }
        return 0;
    });
        console.log(this.pacientes);
      },
      err=>{
        if (err.status==404) {
            this.barraEstado="No hay pacientes registrados.";
            console.log("no hay pacientes")
        }else{
          console.log("error:")
          alert('Error en la peticion');
        }
      }
    );

  }
}
