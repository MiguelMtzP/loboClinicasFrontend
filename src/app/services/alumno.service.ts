import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Alumno} from '../models/alumno';
import {Curso} from '../models/curso';
import {Consulta} from '../models/consulta';
import {Cita} from '../models/cita';
import {Paciente} from '../models/paciente';

@Injectable()
export class AlumnoService{
  public url:string;
  public jwtAuth:string;
  constructor(private _http:Http){
    this.url='http://localhost:3000/alumno/';
    this.jwtAuth= "jwt "+localStorage.getItem("token");
  }

  makeFotoRequest(foto:File){
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
      xhr.open('POST',this.url+"cargaFotoPerfil",true);
      xhr.setRequestHeader("Authorization",this.jwtAuth);
      //cabeceras
      xhr.send(formData);
    });
  }


  getPerfil(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url,{headers:headers})
                      .map(res=>res.json());
  }

  updatePerfil(alumno:Alumno){
    let json= JSON.stringify(alumno);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.put(this.url,params,{headers:headers})
                      .map(res=>res.json());
  }

  getCursos(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'cursos',{headers:headers})
                      .map(res=>res.json());
  }
  getCurso(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'curso/'+id,{headers:headers})
                      .map(res=>res.json());
  }
  getMisCursos(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'misCursos',{headers:headers})
                      .map(res=>res.json());
  }
  inscribirCurso(id:string){
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.put(this.url+'inscribirCurso/'+id,{},{headers:headers})
                      .map(res=>res.json());
  }

  getCitas(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'citas',{headers:headers})
                      .map(res=>res.json());
  }
  getCita(id: string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'cita/'+id,{headers:headers})
                      .map(res=>res.json());
  }
  saveCita(cita:Cita){
    let json= JSON.stringify(cita);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.post(this.url+'cita',params,{headers:headers})
                     .map(res=>res.json());
  }
  updateCita(cita:Cita,id:string){
    let json= JSON.stringify(cita);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.put(this.url+'cita/'+id,params,{headers:headers})
                     .map(res=>res.json());
  }
  deleteCita(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.delete(this.url+'cita/'+id,{headers:headers})
                     .map(res=>res.json());
  }
  //******************* CONSULTAS **********************+++++
  getConsultas(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'consultas/'+id,{headers:headers})
                      .map(res=>res.json());
  }
  saveConsulta(consulta:Consulta){
    let json= JSON.stringify(consulta);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.post(this.url+'consulta',params,{headers:headers})
                     .map(res=>res.json());
  }

  //******************* PACIENTES **********************+++++
  getPacientes(){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'pacientes',{headers:headers})
                      .map(res=>res.json());
  }
  getPaciente(id:string){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.get(this.url+'paciente/'+id,{headers:headers})
                      .map(res=>res.json());
  }

  savePaciente(paciente:Paciente){
    let json= JSON.stringify(paciente);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.post(this.url+'paciente',params,{headers:headers})
                     .map(res=>res.json());
  }

  deletePaciente(id:string ){
    let headers= new Headers({'Authorization':this.jwtAuth});
    return this._http.delete(this.url+'paciente/'+id,{headers:headers})
                      .map(res=>res.json());
  }

  updatePaciente(paciente:object,id:string){
    let json= JSON.stringify(paciente);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json','Authorization':this.jwtAuth});
    return this._http.put(this.url+'paciente/'+id,params,{headers:headers})
                     .map(res=>res.json());
  }


}
