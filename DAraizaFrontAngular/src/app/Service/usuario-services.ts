import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Interface/UsuarioModel';

@Injectable({
  providedIn: 'root',

})
export class UsuarioService{
  private url: string = "http://localhost:8080/demo/api";

  constructor (private http : HttpClient){ }

  getAll(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(this.url);
  } 
}