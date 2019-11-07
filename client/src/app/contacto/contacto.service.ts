import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';

import { URL_BACKEND } from '../config/config';


@Injectable()
export class ContactoService {
  private urlEndPoint: string = URL_BACKEND + '/api/contacto';

  private urlEndPoint1: string = URL_BACKEND + '/api/email';

  constructor(private http: HttpClient, private router: Router) { }


  create(contacto: Contacto): Observable<Contacto> {
    return this.http.post(this.urlEndPoint, contacto)
      .pipe(
        map((response: any) => response.contacto as Contacto),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }




  sendEmail(contacto: Contacto): Observable<Contacto> {
    return this.http.post(this.urlEndPoint1, contacto)
      .pipe(
        map((response: any) => response.contacto as Contacto),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }

}
