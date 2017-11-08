import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Profesor} from '../models/profesor';
import {Curso} from '../models/curso';

@Injectable()
export class ProfesorService {
  public url:string;
  public jwtAuth:string;

  constructor(private _http:Http){
    this.url='http://localhost:3000/profesor/';
    this.jwtAuth= "jwt "+localStorage.getItem("token");
  }

  login(usr:String, pass:String ){
    let json= JSON.stringify({"correo":usr,"contrasena":pass});
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'login',params,{headers:headers})
                     .map(res=>res.json());
  }
  singin(profesor:Profesor){
    let json= JSON.stringify({"nombre":profesor.nombre,"apellidos":profesor.apellidos,"correo":profesor.correo,"contrasena":profesor.contrasena});
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'singin',params,{headers:headers})
                     .map(res=>res.json());
  }
  //============= CONSULTAS ===================
   getConsultasPendientes(idAlumno:string,idCurso:string){
     let headers= new Headers({'Authorization':this.jwtAuth});
     return this._http.get(this.url+"getconsultas-pendientes/"+idAlumno+"/"+idCurso,{headers:headers}).
                       map(res=>res.json());
   }
  //============= CLINICAS ===================
  getClinicas(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+"getclinicas",{headers:headers}).
                      map(res=>res.json());
  }

//============= CURSOS ===================

  saveCurso(curso:Curso){
    let json= JSON.stringify({nombre:curso.nombre,id_clinica:curso.id_clinica,id_profesor:curso.id_profesor,password:curso.password});
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.post(this.url+"crearCurso",params,{headers:headers}).
                      map(res=>res.json());
  }

  getcursos(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+"getcursos",{headers:headers}).
                      map(res=>res.json());
  }
  getAlumnos(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+"getAlumnos/"+id,{headers:headers}).
                      map(res=>res.json());
  }
  getcurso(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+"getcurso/"+id,{headers:headers}).
                      map(res=>res.json());
  }
}
