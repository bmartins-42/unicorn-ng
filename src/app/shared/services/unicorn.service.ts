import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unicorn } from '../models/unicorn.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornService {

  constructor(private readonly http: HttpClient) { }

  public getUnicorn(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`)
  }
}
