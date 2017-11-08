import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProfesorService} from '../../services/profesor.service';
import {Curso} from '../../models/curso';
@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css'],
  providers:[ProfesorService]
})
export class CursosProfesorComponent implements OnInit {

  public cursos:Curso[];
  public barraEstado:string;
  constructor(
    private _profesorService:ProfesorService,
    private _router:Router
  ) {

  }

  ngOnInit() {
    this._profesorService.getcursos().subscribe(
      res=>{
        console.log(res);
        this.cursos=res.cursos;
      },
      err=>{
        console.log(err);
        this.barraEstado="No tiene cursos registrados!";
      }
    );
  }

}
