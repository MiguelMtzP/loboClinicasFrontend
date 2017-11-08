import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProfesorService} from '../../services/profesor.service';
import {Curso} from '../../models/curso';

@Component({
  selector: 'app-detalle-curso-profesor',
  templateUrl: './detalle-curso-profesor.component.html',
  styleUrls: ['./detalle-curso-profesor.component.css'],
  providers: [ProfesorService]
})
export class DetalleCursoProfesorComponent implements OnInit {
  public curso:any;
  public alumnos:any;
  public barraEstado:string;
  public curso_id:string;
  constructor(
    private _profesorService:ProfesorService,
    private _router:Router,
    private _route: ActivatedRoute,

  ) {

  }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.curso_id=params['id'];
      this._profesorService.getcurso(this.curso_id).subscribe(
        res=>{
          this.curso=res.curso;
          console.log(this.curso);
        },
        err=>{
          console.log(err);
        }
      );
      this._profesorService.getAlumnos(this.curso_id).subscribe(
        res=>{
          this.alumnos=res.alumnos;
          console.log(this.alumnos);
        },
        err=>{
          console.log(err)
        }
      );
    });
  }

}
