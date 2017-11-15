import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../../services/alumno.service';
import {Curso} from '../../models/curso';
import {CursoAlumno} from '../../models/cursoAlumno';

@Component({
  selector: 'app-detalle-curso-alumno',
  templateUrl: './detalle-curso-alumno.component.html',
  styleUrls: ['./detalle-curso-alumno.component.css'],
  providers:[AlumnoService]
})
export class DetalleCursoAlumnoComponent implements OnInit {
  public curso_id:string;
  public contrasenaCurso:string;
  public curso: any;
  public tratamientos: any;
  public inscrito:boolean;
  public inscribirse:boolean;
  public errorcontra:boolean;
  constructor(
    private _alumnoService: AlumnoService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.inscribirse=false;
    this.errorcontra=false;
  }
  onSubmit(){
    if(this.curso.password===this.contrasenaCurso){
      this._alumnoService.inscribirCurso(this.curso_id).subscribe(
        res=>{
          //console.log(res)
          this.getcurso();
        },
        err=>{
          console.log(err)

        }
      );
    }else{
      this.errorcontra=true;
    }
    //console.log(this.contrasenaCurso);
  }
  getcurso(){
    this._route.params.forEach((params:Params)=>{
      this.curso_id=params['id'];
      this._alumnoService.getCurso(this.curso_id).subscribe(
        res=>{
          this.curso=res.curso;
          //console.log(res);
          if (res.inscrito=="no") {
            this.inscrito=false;
          } else {
            this.inscrito=true;
            this.tratamientos=res.tratamientos;
          }
        },
        err=>{
          console.log(err);
        }
      );
    });
  }
  ngOnInit() {
    this.getcurso();
  }

}
