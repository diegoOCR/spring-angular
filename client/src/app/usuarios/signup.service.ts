import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { UsuarioRol } from './usuario-rol';

import { Router } from '@angular/router';

import { URL_BACKEND } from '../config/config';


@Injectable()
export class SignupService {
  private urlEndPoint: string = URL_BACKEND + '/api/usuarios';

  private urlEndPoint1: string = URL_BACKEND + '/api/signup';

  private urlEndPoint2: string = URL_BACKEND + '/api/usuariorole';

  constructor(private http: HttpClient, private router: Router) { }


  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post(this.urlEndPoint, usuario)
      .pipe(
        map((response: any) => response.usuario as Usuario),
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


  createUserRol(usuarioRol: UsuarioRol): Observable<UsuarioRol> {
    return this.http.post(this.urlEndPoint2, usuarioRol)
      .pipe(
        map((response: any) => response.usuarioRol as UsuarioRol),
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





  update(usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint1}/${usuario.id}`, usuario).pipe(
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
