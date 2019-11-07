import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      swal({
        title: 'Login',
        text: `Hi ${this.authService.usuario.username}you are connected!`,
        type: 'info',
        timer: 2000});
      this.router.navigate(['/clientes']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal('Error Login', 'Username o password vacías!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/clientes']);
      // swal('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
      swal({
        title: 'Login',
        text: `Hi ${usuario.username}, you have successfully logged in!`,
        type: 'success',
        timer: 2000});
    }, err => {
      if (err.status == 400) {
        swal('Error Login', 'Incorrect username or password!', 'error');
      }
    }
    );
  }

}
