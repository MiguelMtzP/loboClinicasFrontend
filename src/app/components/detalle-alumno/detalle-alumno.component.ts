import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Alumno} from '../../models/alumno';
import {ProfesorService} from '../../services/profesor.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css'],
  providers:[ProfesorService]
})
export class DetalleAlumnoComponent implements OnInit {

  public foto: File;
  public barraEstado: string;
  public urlImagen:string;
  public id_curso:string;
  public average:number;
  public id_alumno:string;
  public curso: any;
  public inscripcion: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _profesorService:ProfesorService
  ) {

   }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
        this.id_curso=params['idCurso'];
        this.id_alumno=params['idAlumno'];
        this._profesorService.getcurso(this.id_curso).subscribe(
          res=>{
            //console.log(res.curso);
            this.curso=res.curso;
            this.getInscripcion();

          },
          err=>{
            console.log(err);
          }
      );
    });
  }

  averageCourse(){
    var realizados=0;
    var avance=0;
    var total=0;
    for(let i =0; i< this.curso.id_clinica.tratamientos.length; i++){
      total+=this.curso.id_clinica.tratamientos[i].cantidad;
    }
    for(let i =0; i< this.inscripcion.tratamientos.length; i++){
      realizados+=(this.inscripcion.tratamientos[i].cantidad<0)?0:this.inscripcion.tratamientos[i].cantidad;
    }
    realizados=total-realizados;
    //console.log("realizados:"+realizados+" total:"+total);
    avance=(realizados*100)/total;
    //console.log("average:"+ avance);
    this.average=avance;
  }

  getInscripcion(){
    this._profesorService.getInscripcion(this.id_curso,this.id_alumno).subscribe(
      result=>{
        this.inscripcion=result.inscripcion;
        this.averageCourse();
      },
      err=>{
        console.log(err);

      });
  }

}
