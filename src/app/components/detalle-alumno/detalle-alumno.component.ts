import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Alumno} from '../../models/alumno';
import {ProfesorService} from '../../services/profesor.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css'],
  providers:[ProfesorService]
})
export class DetalleAlumnoComponent implements OnInit {

  public foto: File;
  public barraEstado: string;
  public urlImagen:string;
  public alumno: Alumno;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _profesorService:ProfesorService
  ) {

   }

  ngOnInit() {
  }

}
