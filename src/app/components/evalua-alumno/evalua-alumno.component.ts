import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProfesorService} from '../../services/profesor.service';
import {Curso} from '../../models/curso';

@Component({
  selector: 'app-evalua-alumno',
  templateUrl: './evalua-alumno.component.html',
  styleUrls: ['./evalua-alumno.component.css'],
  providers: [ProfesorService]

})
export class EvaluaAlumnoComponent implements OnInit {

  public curso:any;
  public alumnoSelected:any;
  public alumnos:any[];
  public alumnosCopia:any[];
  public barraEstado:string;
  public curso_id:string;
  public buscar:string;
  public nombreAlumnoSelected:string;
  public idAlumnoSelected:string;
  constructor(
    private _profesorService:ProfesorService,
    private _router:Router,
    private _route: ActivatedRoute,

  ) {}
  filtra(){
    this.alumnosCopia=this.alumnos.filter(t=>{
      return t.id_alumno.nombre.toLowerCase().includes(this.buscar.toLowerCase())||t.id_alumno.apellidos.toLowerCase().includes(this.buscar.toLowerCase());
    });

  }
  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.curso_id=params['id'];
      this._profesorService.getAlumnos(this.curso_id).subscribe(
        res=>{
          this.alumnos=res.alumnos;
          this.alumnosCopia=this.alumnos;
        },
        err=>{
          console.log(err)
        }
      );
    });

  }
  volverAlListado(){
    this.alumnoSelected=undefined;
    //console.log(this.alumnoSelected);
  }
  seleccionaAlumno(id:string, nombre:string){
    this.idAlumnoSelected=id;
    this.nombreAlumnoSelected=nombre;
    //console.log(id)
    this.alumnoSelected={};
    this._profesorService.getConsultasRealizadasDelCurso(this.idAlumnoSelected,this.curso_id).subscribe(res=>{
      ////console.log(res);
      this.alumnoSelected.consultas=res.consultas;
      this.alumnoSelected.nombre=nombre;
      //console.log(this.alumnoSelected);
    },
    err=>{
      console.log(err);
    });
  }

  validaTratamiento(idConsulta:string,idTratamiento:string){
    this._profesorService.validaTratamiento(idConsulta,idTratamiento).subscribe(
      res=>{
        this.seleccionaAlumno(this.idAlumnoSelected,this.nombreAlumnoSelected);
      },
      err=>{
        console.log(err);

      }
    )
  }

}
