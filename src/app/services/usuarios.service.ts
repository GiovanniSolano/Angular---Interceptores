import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }



  // *****PETICIÓN NORMAL SIN INTERCEPTORES*******

  // obtenerUsuarios() {

  //   let params = new HttpParams().append('page', '1');
  //   params = params.append('nombre', 'giovanni');

  //   const headers = new HttpHeaders({
  //     'token-usuario': '123456gfds'
  //   });

  //   return this.http.get(`https://reqres.in/api/user`, {
  //     params,
  //     headers
  //   }).pipe(
  //     map((resp: any) => {
  //       return resp.data;
  //     }),
  //     catchError(this.manejarError)
  //   );
  // }


  // *****PETICIÓN CON INTERCEPTORES*******

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'giovanni');

    return this.http.get(`https://reqres.in/api/user`, {
      params
    }).pipe(
      map((resp: any) => {
        return resp.data;
      })

    );
  }

  

}
