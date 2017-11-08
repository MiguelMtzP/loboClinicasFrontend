import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../../services/alumno.service';
import {Cita} from '../../models/cita';
import {Paciente} from '../../models/paciente';

@Component({
  selector: 'app-agrega-cita',
  templateUrl: './agrega-cita.component.html',
  styles: [],
  providers: [AlumnoService]

})
export class AgregaCitaComponent implements OnInit {
  public pacientes:Paciente[];
  public titulo:string;
  public barraEstado:boolean;
  public cita:Cita;
  public thisMoment:string;
  public id:string;
  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.id=localStorage.getItem('id');
    this.titulo="Agenda una Nueva Cita";
    let d= new Date();
    this.barraEstado=false;
    //this.thisMoment=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+"T"+d.getHours()+":"+d.getMinutes();
    //console.log(this.thisMoment);
  }

  onSubmit(){
    this._alumnoService.saveCita(this.cita).subscribe(
      res=>{
        this._router.navigate(['/agenda']);
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit() {
    this.cita= new Cita("","","",this.id,"");
    this._alumnoService.getPacientes().subscribe(
      res=>{
        this.pacientes=res.pacientes.sort(function (a, b) {
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
        this.barraEstado=true;
        
      });
  }

}
