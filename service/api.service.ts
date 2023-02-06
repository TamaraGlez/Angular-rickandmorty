import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // es importante que en app.module esté importado
  constructor(private http: HttpClient ) { }

  getDigimon(){
    return this.http.get('https://rickandmortyapi.com/api/character?page=1')
  }

}
