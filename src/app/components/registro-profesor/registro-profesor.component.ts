import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Profesor} from '../../models/profesor';
import {ProfesorService} from '../../services/profesor.service';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.component.html',
  styleUrls: ['./registro-profesor.component.css'],
  providers: [ProfesorService]
})
export class RegistroProfesorComponent implements OnInit {

  public profesor:Profesor;
  public token:string;

  constructor(
    private _profesorService:ProfesorService,
    private _router:Router
  ) {
    this.profesor= new Profesor("","","","","");
  }

  onSubmit(){
    console.log("submit");
    this._profesorService.singin(this.profesor).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem("id",res.usr._id);
        localStorage.setItem("token",res.token);
        localStorage.setItem("nombre",res.usr.nombre);
        localStorage.setItem("apellidos",res.usr.apellidos);
        localStorage.setItem("correo",res.usr.correo);
        this._router.navigate(['/profesor/cursos']);
      },
      err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
