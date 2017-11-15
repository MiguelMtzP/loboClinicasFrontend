import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../../services/alumno.service';
import {Paciente} from '../../models/paciente';
import {Cita} from '../../models/cita';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css'],
  providers: [AlumnoService]

})
export class DetalleCitaComponent implements OnInit {

  public titulo:string;
  public id_paciente:string;
  public cita:Cita;
  public updatedCita:Cita;
  public pacientes:Paciente[];
  public eliminar: boolean;
  public editar: boolean;
  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.updatedCita= new Cita("","","","","");
    this.titulo="Detalle de Cita";
    this.editar=false;
    this.eliminar=false;
    this._alumnoService.getPacientes().subscribe(
      res=>{
        this.pacientes=res.pacientes.sort((a,b)=>{
          if(a.apellidos < b.apellidos){
            return -1;
          }
          if(a.apellidos > b.apellidos){
            return 1;
          }
        return 0;
        });
      },
      err=>{
        console.error(err);
      });
  }


  ngOnInit() {
    this.getCita();
  }
  getCita(){
    this._route.params.forEach((params:Params)=>{
      this.titulo="Detalle de Cita"
      let id_cita=params['id'];
      this._alumnoService.getCita(id_cita).subscribe(
        res=>{
          this.cita=res.cita;
          this.id_paciente=res.cita.id_paciente._id;

        },
        err=>{
          console.error(err);
        }
      );
    });
  }
  updateCita(){
    this._alumnoService.updateCita(this.updatedCita,this.cita._id).subscribe(
      res=>{
        //console.log(res);

        this.editar=false;
        this.getCita();
      },err=>{
        console.error(err);
      });
  }
  deleteCita(){
    this._alumnoService.deleteCita(this.cita._id).subscribe(
      res=>{
        //console.log(res);
        this._router.navigate(['/agenda']);
      },
      err=>{
        console.error(err);
      });
    //console.log("delete cita")
  }
  editaAction(){
    this.editar=true;
    this.titulo='Editar Cita';
    ////console.log(this.cita);

    this.updatedCita._id=this.cita._id;
    this.updatedCita.asunto=this.cita.asunto;
    this.updatedCita.fecha_hora=this.cita.fecha_hora;
    this.updatedCita.id_alumno=this.cita.id_alumno;
    this.updatedCita.id_paciente=this.id_paciente;

  }
}
