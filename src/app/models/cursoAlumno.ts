export class CursoAlumno{
  constructor(
    public id_curso: string,
    public id_alumno:string,
    public tratamientos:Array<{
      id_tratamiento: string,
      cantidad:string
    }>
  ){}
}
