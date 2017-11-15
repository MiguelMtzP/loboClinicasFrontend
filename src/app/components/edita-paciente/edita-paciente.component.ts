import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../../services/alumno.service';
import {Paciente} from '../../models/paciente';

@Component({
  selector: 'app-edita-paciente',
  templateUrl: './edita-paciente.component.html',
  styleUrls: ['./edita-paciente.component.css'],
  providers: [AlumnoService]
})
export class EditaPacienteComponent implements OnInit {
  public paciente:Paciente;
//  public forma:FormGroup;
  public id_paciente:string;
  public titulo:string;

  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo="Modifica Datos del Paciente"

  }
  getPaciente(){
    this._alumnoService.getPaciente(this.id_paciente).subscribe(
      (res)=>{
        this.paciente=res.paciente;
      },
      err=>{
        if(err!= null){
          console.log(err);
          alert ('error en la peticion');
        }
      }
    );
  }

  onSubmit(){


    this._alumnoService.updatePaciente(this.paciente,this.id_paciente).subscribe(
      res=>{
        //console.log(res);
        this._router.navigate(['/paciente/',this.id_paciente]);
      },err=>{
        if(err!= null){
          console.log(err);
          alert ('error en la peticion');
        }
      });
  }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.id_paciente= params['id'];
      this.getPaciente();
    });
  }

}
