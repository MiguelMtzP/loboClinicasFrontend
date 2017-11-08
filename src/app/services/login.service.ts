import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Alumno} from '../models/alumno';

@Injectable()
export class LoginService{
  public url:string;

  constructor(private _http:Http){
    this.url='http://localhost:3000/';
  }

  login(usr:String, pass:String ){
    let json= JSON.stringify({"usr":usr,"password":pass});
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'login',params,{headers:headers})
                     .map(res=>res.json());
  }

  singin(alumno:Alumno){
    let json= JSON.stringify({"nombre":alumno.nombre,"apellidos":alumno.apellidos,"matricula":alumno.matricula,"correo":alumno.correo,"contrasena":alumno.contrasena});
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'singin',params,{headers:headers})
                     .map(res=>res.json());
  }

  makeFotoRequest(foto:File,jwtAuth:string){
    return new Promise((resolve,reject)=>{
      var formData = new FormData();
      var xhr= new XMLHttpRequest();
      formData.append('perfil',foto,foto.name);
      xhr.onreadystatechange= ()=>{
        if(xhr.readyState==4){
          if(xhr.status==200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST',this.url+"alumno/cargaFotoPerfil",true);
      xhr.setRequestHeader("Authorization",jwtAuth);
      //cabeceras
      xhr.send(formData);
    });
  }

}
