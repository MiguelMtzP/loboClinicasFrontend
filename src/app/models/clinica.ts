export class Clinica{
  constructor(
    public _id: string,
    public nombre: string,
    public tratamientos: Array<{
      id_tratamiento: string,
      cantidad:string
    }>
  ){}

}
