import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Alumno} from '../../models/alumno';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css'],
  providers:[LoginService]
})
export class RegistroAlumnoComponent implements OnInit {
  public alumno:Alumno;
  public urlImagen:string;
  public token:string;
  public foto:File;
  public imagen:boolean;
  constructor(
    private _loginService:LoginService,
    private _router:Router
  ) {
    this.alumno = new Alumno("","","","","","");
    this.imagen=false;
  }

  ngOnInit() {
    //this.urlImagen="";
  }
  uploadImage(fileInput:any){
    this.foto=<File>fileInput.target.files[0];
    if (this.foto == undefined ) {
        console.log("no hay foto a cargar!")
        this.imagen=false;
    } else {
      this.imagen=true;
      console.log(this.foto);


    }
  }
  onSubmit(){
    console.log(this.alumno)
    this._loginService.singin(this.alumno).subscribe(
      res=>{
        this.token=res.token;
        this.alumno=res.usr;
        this._loginService.makeFotoRequest(this.foto,"jwt "+this.token).then(
          result=>{
            console.log("foto actualizada");
            localStorage.setItem("id",this.alumno._id);
            localStorage.setItem("token",this.token);
            localStorage.setItem("nombre",this.alumno.nombre);
            localStorage.setItem("apellidos",this.alumno.apellidos);
            localStorage.setItem("matricula",this.alumno.matricula);
            this._router.navigate(['/cursos']);
          },
          err=>{
            console.log("marco error")
            console.log(err);
          }
        );

        console.log(res);
      },err=>{
        console.log(err);
      }
    );
  }

}
