import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../services/alumno.service';
import {Curso} from '../models/curso';
import {CursoAlumno} from '../models/cursoAlumno';

@Component({
  selector:'listaCursos',
  templateUrl: '../views/listaCursos.html',
  styleUrls:['../css/listaCursos.css'],
  providers: [AlumnoService]
})

export class ListaCursosComponent implements OnInit{
  public titulo:string;
  public barraMisCursos:string;
  public barraCursos:string;
  public msjError:string;
  public cursos:Curso[];
  public misCursos:CursoAlumno[];


  constructor(private _alumnoService: AlumnoService){



  }
  ngOnInit(){
    this._alumnoService.getMisCursos().subscribe(
      res=>{
        this.misCursos=res.cursos;
        if (res.cursos.length>0) {
          console.log("mios");
          console.log(this.misCursos);
        } else {
          this.barraMisCursos="No tienes cursos inscritos!";
        }
      },
      err=>{
        this.msjError= <any>err;
        if(this.msjError!= null){
          console.log(this.msjError);
          alert('Error en la peticion');
        }
      }
    );

    this._alumnoService.getCursos().subscribe(
      res=>{
        this.cursos=res.cursos;
        if(res.cursos.length>0){
          console.log("todos los cursos");
          console.log(this.cursos);
        }else{
          this.barraCursos="No hay cursos!";
        }

      },
      err=>{
        this.msjError= <any>err;
        if(this.msjError!= null){
          console.log(this.msjError);
          alert('Error en la peticion');
        }
      }
    );

  }
}
