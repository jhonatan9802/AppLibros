export class Libros
{
  empresaId:number
  categoriaId:number
  nombreCategoria:string

  constructor(empresaId:number, categoriaId:number, nombreCategoria:string){
    this.empresaId = empresaId
    this.categoriaId = categoriaId
    this.nombreCategoria = nombreCategoria

  }
}
