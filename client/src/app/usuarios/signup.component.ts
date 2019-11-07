import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { SignupService } from './signup.service';
import { UsuarioService } from './usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioRol } from './usuario-rol';
import { AuthService } from '../usuarios/auth.service';



import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    usuario: Usuario = new Usuario();

    usuarioRol: UsuarioRol = new UsuarioRol();

    errores: string[];

    tituloSignup: string = "Registrarse";





  constructor(public authService: AuthService, private usuarioService: UsuarioService, private signupService: SignupService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {
     }




  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.usuarioService.getUsuario(id).subscribe((usuario) => this.usuario = usuario);
      }
    });
  }




  create(): void {
    this.usuario.enabled = 1;
    this.signupService.create(this.usuario)
      .subscribe(
        usuario => {
          this.usuarioRol.usuario_id = usuario.id;
          this.createUsuarioRol();
          this.router.navigate(['/home']);

          swal({
            title: 'User created',
            text: 'User created',
            type: 'success',
            timer: 2000});
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );


   }


   createUsuarioRol(): void {
     this.signupService.createUserRol(this.usuarioRol)
       .subscribe(
         usuarioRol => {

         },
         err => {
           this.errores = err.error.errors as string[];
           console.error('Código del error desde el backend: ' + err.status);
           console.error(err.error.errors);
         }
       );
    }





    update(): void {
      this.tituloSignup = "Editar";
      this.usuario.enabled = 1;
      console.log(this.usuario);
      this.signupService.update(this.usuario)
        .subscribe(
          json => {
            this.router.navigate(['/usuarios']);
            swal({
              title: 'User updated',
              text: `${json.mensaje}: ${json.usuario.nombre}`,
              type: 'success',
              timer: 2000});
          },
          err => {
            this.errores = err.error.errors as string[];
            console.error('Código del error desde el backend: ' + err.status);
            console.error(err.error.errors);
          }
        )
    }


}
