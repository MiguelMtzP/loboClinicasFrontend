import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AlumnoService} from '../../services/alumno.service';
import {Consulta} from '../../models/consulta';

@Component({
  selector: 'app-agrega-consulta',
  templateUrl: './agrega-consulta.component.html',
  styleUrls: ['./agrega-consulta.component.css'],
  providers: [AlumnoService]
})
export class AgregaConsultaComponent implements OnInit {
  public id_paciente:string;
  public consulta:Consulta;
  public tratamientos:any;
  public listaTratamientos:number;
  public cursos:any;

  constructor(
    private _alumnoService: AlumnoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.listaTratamientos=1;
  }

  onSubmit(){
    this._alumnoService.saveConsulta(this.consulta).subscribe(
      res=>{
        //console.log(res);
        this._router.navigate(['/paciente',this.id_paciente]);
      },
      err=>{
        console.log(err);

      }
    );
  }
  asignaNombreTrat(event:any,i:number){
    if (event.target.selectedIndex>0) {
      let indiceSeleccionado=event.target.selectedIndex-1
      console.log(indiceSeleccionado+"-"+this.tratamientos[indiceSeleccionado].id_tratamiento.nombre);
      this.consulta.tratamientos[i].nombre=this.tratamientos[indiceSeleccionado].id_tratamiento.nombre;
      console.log(this.tratamientos);
    } else {
      this.consulta.tratamientos[i].nombre="";
    }
  }
  removeTratamiento(i:number){
    console.log("removiendo posision "+i)
    this.consulta.tratamientos.splice(i,1);
  }
  agregaTratamiento(){
    this.consulta.tratamientos.push({id_tratamiento:"",nombre:"",valido:false});
  }
  changeTratamientos(curso:string){
    if (curso.length==0) {
        this.tratamientos=undefined;
        this.consulta.tratamientos=[{id_tratamiento:"",nombre:"",valido:false}];
    } else {
      for (let variable of this.cursos) {
        if(variable._id===curso){
          this.tratamientos=variable.tratamientos;
        }
      }
    }
    console.log(this.tratamientos);
  }
  ngOnInit() {

    this._route.params.forEach((params:Params)=>{
      this.id_paciente=params['id'];
    });
    this.consulta= new Consulta("","",this.id_paciente,"","",localStorage.getItem("id"),"",[{id_tratamiento:"",nombre:"",valido:false}]);
    this._alumnoService.getMisCursos().subscribe(
      res=>{
        console.log(res);
        this.cursos=res.cursos;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
