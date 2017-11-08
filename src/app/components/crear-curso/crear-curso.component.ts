import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProfesorService} from '../../services/profesor.service';
import {Curso} from '../../models/curso';
import {Clinica} from '../../models/clinica';
@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css'],
  providers:[ProfesorService]
})
export class CrearCursoComponent implements OnInit {
  public clinicas:Clinica[];
  public curso:Curso;
  public titulo:string;
  public id:string;

  constructor(
    private _profesorService:ProfesorService,
    private _router: Router
  ) {
    this.titulo="Crear un Curso";
    this.id=localStorage.getItem("id");
    this.curso=new Curso("","","",this.id,"");
  }


  ngOnInit() {
    this._profesorService.getClinicas().subscribe(
      res=>{
        this.clinicas=res.clinicas;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
  }

  onSubmit(){
    this._profesorService.saveCurso(this.curso).subscribe(
      res=>{
        this.curso=res.curso;
        console.log(res);
        this._router.navigate(['profesor/cursos']);
      },
      err=>{
        console.log(err);
      }
    );
  }
}
