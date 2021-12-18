import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../models/Libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  rout:string = 'http://localhost:14552/api/Libro'
  constructor(private http:HttpClient) { }

  GetLibros(libros: Libros): Observable<Libros>{

    const head = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    //let params = JSON.stringify(libros)
    console.log('true')

    return this.http.post<Libros>(this.rout + '/GetTI_Categoria', {headers:head})
  }
}
