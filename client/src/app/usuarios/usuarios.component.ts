import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import swal from 'sweetalert2';
// import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  paginador: any;
  usuarioSeleccionado: Usuario;

  constructor(private usuarioService: UsuarioService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.usuarioService.getUsuarios(page)
        .pipe(
          // tap(response => {
          //   console.log('ClientesComponent: tap 3');
          //   (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
          // })
        ).subscribe(response => {
          this.usuarios = response.content as Usuario[];
          this.paginador = response;
        });
    });

  }

  delete(usuario: Usuario): void {
    swal({
      title: 'Are you sure?',
      text: `¿Sure you want to delete the user ${usuario.nombre} ${usuario.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if(usuario.nombre != "admin"){
          this.usuarioService.delete(usuario.id).subscribe(
            () => {
              this.usuarios = this.usuarios.filter(cli => cli !== usuario)
              swal({
                title: 'Customer deleted!',
                text: `Customer ${usuario.nombre} successfully deleted.`,
                type: 'success',
                timer: 2000});
            }
          )
        }else{
          swal('Not permited!', `You can not delete ${usuario.nombre}!`, 'warning')
        }
      }
    });
  }

}
