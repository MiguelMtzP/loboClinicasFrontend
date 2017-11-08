export class Consulta{
  constructor(
    public _id: string,
    public fecha:string,
    public id_paciente:string,
    public ef: string,
    public observaciones: string,
    public id_alumno:string,
    public id_cursoAlumno: string,
    public tratamientos: Array<{
      id_tratamiento: string,
      nombre:string,
      valido:boolean
    }>
  ){}
}
