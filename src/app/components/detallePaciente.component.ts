import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../services/alumno.service';
import {Paciente} from '../models/paciente';
import {Consulta} from '../models/consulta';

@Component({
  selector:'detallePaciente',
  templateUrl: '../views/detallePaciente.html',
  styleUrls:['../css/detallePaciente.css'],
  providers: [AlumnoService]
})

export class DetallePacienteComponent implements OnInit{
  public paciente:Paciente;
  public eliminar: boolean;
  public paciente_id:string;
  public consultas: Consulta[];
  public titulo:string;

  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo="Detalle del Paciente";
  }
  deletePaciente(){
    this._alumnoService.deletePaciente(this.paciente_id).subscribe(
      res=>{
        //console.log(res);
        this._router.navigate(['/pacientes']);
      },
      err=>{
        if(err!=null){
          console.error(err);
          alert('error en la peticion');
        }
      });
  }

  ngOnInit(){
    this.eliminar=false;
    this._route.params.forEach((params:Params)=>{
      this.paciente_id= params['id'];
      this._alumnoService.getPaciente(this.paciente_id).subscribe(
        res=>{
          this.paciente=res.paciente;
          //console.log(res);
          if(!this.paciente){
            this._router.navigate(['/pacientes']);
          }
          this._alumnoService.getConsultas(this.paciente_id).subscribe(
            res=>{
              this.consultas=res.consultas;
              //console.log(this.consultas)
            },
            err=>{
              if(err!= null){
                console.log(err);
                alert ('error en la peticion');
              }
            }
          )
        },
        err=>{
          if(err!= null){
            console.log(err);
            alert ('error en la peticion');
          }
        }
      );
    });

  }
}
