import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProfesorService} from '../../services/profesor.service';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.component.html',
  styleUrls: ['./login-profesor.component.css'],
  providers:[ProfesorService]

})
export class LoginProfesorComponent implements OnInit {
  public usr:string;
  public pass: string;
  public msjError;

  constructor(
    private _profesorService: ProfesorService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
  }
  login(){
    console.log("login");
    this._profesorService.login(this.usr,this.pass).subscribe(
      res=>{
        console.log("res:");
        console.log(res);
        localStorage.setItem("id",res.usr._id);
        localStorage.setItem("token",res.token);
        localStorage.setItem("nombre",res.usr.nombre);
        localStorage.setItem("apellidos",res.usr.apellidos);
        localStorage.setItem("correo",res.usr.correo);
        this._router.navigate(['/profesor/cursos']);
      },
      err=>{
        console.log("err:");
        console.log(err);
        alert("Datos no validos!");
      }
    );
  }
}
