import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url:string = 'http://localhost:14552/api/Libro/GetBL_Libro'
  EX_url:string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) {
    console.log('Ready')
  }

  GetLibros(){
    const header = new HttpHeaders()
    .set('Content-Type', 'application/json');
    if(false){
      return this.http.get(this.EX_url, {headers:header})
    }
    else{
      return this.http.get(this.url, {headers:header})
    }
  }

  /*GetLibrosEX(){
    const EX_header = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.get(this.EX_url, {headers:EX_header})
  }*/
}
