import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Base}from '../model/base';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  private url: string = `${environment.HOST}posts/`;

  constructor(private http: HttpClient) {
   }

   public lista() {
    return this.http.get<Base[]>(`${this.url}`);
   }

}
