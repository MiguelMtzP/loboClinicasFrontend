import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {LoginService} from '../services/login.service';


@Component({
  selector:'login',
  templateUrl: '../views/login.html',
  styleUrls: ['../css/login.css'],
  providers:[LoginService]
})

export class LoginComponent implements OnInit{
  public usr:string;
  public pass: string;
  public msjError;

  constructor(
    private _loginService: LoginService,
    private _route:ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(){}


  login(){
    this._loginService.login(this.usr,this.pass).subscribe(
      res=>{
        console.log(res);


        localStorage.setItem("id",res.usr._id);
        localStorage.setItem("token",res.token);
        localStorage.setItem("nombre",res.usr.nombre);
        localStorage.setItem("apellidos",res.usr.apellidos);
        localStorage.setItem("matricula",res.usr.matricula);
        this._router.navigate(['/cursos']);


      },err=>{
        this.msjError= <any>err;
        if(this.msjError!= null){
          alert('Datos incorrectos!');
        }
      }
    );
  }
}
