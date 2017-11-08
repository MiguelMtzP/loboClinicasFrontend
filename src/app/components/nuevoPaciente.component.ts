import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../services/alumno.service';
import {Paciente} from '../models/paciente';

@Component({
  selector:'nuevoPaciente',
  templateUrl: '../views/nuevoPaciente.html',
  styleUrls:['../css/listaPacientes.css'],
  providers: [AlumnoService]
})

export class NuevoPacienteComponent implements OnInit{
  public titulo:string;
  public id:string;
  public matricula:string;
  public nombre:string;
  public msjError:string;
  public paciente:Paciente;
  public apellidos:string;

  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.id=localStorage.getItem("id");
  }
  ngOnInit(){
    this.titulo="Nuevo Paciente";
    this.paciente= new Paciente("","","","","",{"nombre":"","apellidos":"","sexo":"","telefono":""},"","","",this.id,"","","");

  }
  onSubmit(){
    console.log(this.paciente);
    this._alumnoService.savePaciente(this.paciente).subscribe(
      res=>{
        this.paciente=res.paciente;
        console.log(this.paciente);
        this._router.navigate(['/pacientes']);

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
