import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public apiResp: any[] = [];

  constructor(private usuarioService: UsuariosService) {

    this.usuarioService.obtenerUsuarios().subscribe(resp => {
      console.log(resp);
      this.apiResp = resp;
    }, (err) => {
      console.log('App', err);
    });

  }

}
