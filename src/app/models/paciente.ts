export class Paciente{
  constructor(
    public _id:string,
    public nombre:string,
    public apellidos:string,
    public edad:string,
    public sexo:string,
    public datos_tutor:{
      nombre:string,
      apellidos:string,
      sexo:string,
      telefono:string,
    },
    public telefono:string,
    public direccion:string,
    public ocupacion:string,
    public id_alumno:string,
    public app:string,
    public ahf:string,
    public ef: string
  ){}
}
