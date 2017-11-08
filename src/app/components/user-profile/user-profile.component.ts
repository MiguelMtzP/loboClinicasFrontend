import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Alumno} from '../../models/alumno';
import {AlumnoService} from '../../services/alumno.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AlumnoService]
})
export class UserProfileComponent implements OnInit {
  public foto: File;
  public barraEstado: string;
  public urlImagen:string;
  public alumno: Alumno;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService:AlumnoService
  ) {

   }

   uploadImage(fileInput:any){
     this.foto=<File>fileInput.target.files[0];
     if (this.foto == undefined ) {
         console.log("no hay foto a cargar!")
     } else {
       console.log(this.foto);
       this._alumnoService.makeFotoRequest(this.foto).then(
         result=>{
           console.log("foto actualizada");
           window.location.reload();
         },
         err=>{
           console.log("marco error")
           console.log(err);
         }
       );
     }
   }

  getimageurl(id:string){
    this.urlImagen="";
    this.urlImagen="http://localhost:3000/alumno/getFotoPerfil/"+id;
  }

  ngOnInit() {
    this.getPerfil();
  }
  getPerfil(){
    this._alumnoService.getPerfil().subscribe(
      res=>{
        this.alumno=res.user;
        console.log(this.alumno);
        this.getimageurl(res.user._id);
      },
      err=>{
        console.error(err);
      });
  }

  onSubmit(){
    this._alumnoService.updatePerfil(this.alumno).subscribe(
      res=>{
        this.barraEstado="Tus datos han sido actualizados con éxito!";
        this.getPerfil();
        localStorage.setItem("nombre",this.alumno.nombre);
        localStorage.setItem("apellidos",this.alumno.apellidos);
        localStorage.setItem("matricula",this.alumno.matricula);
        console.log("Perfil Actualizado");
      },
      err=>{
        console.log(err)
      }
    );
  }

  cerrarsesion(){
    localStorage.clear();
    console.log("sesion Terminada");
    this._router.navigate(["/"]);
  }

}
