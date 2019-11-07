import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';



import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;

  href: string;

  title: string = 'Spring-Angular'

  selectedLanguage = 'de';

  constructor(public authService: AuthService, private router: Router, private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
    this.usuario = new Usuario();
   }


   ngOnInit() {
     if (this.authService.isAuthenticated()) {
       //swal('Login', `Hi ${this.authService.usuario.username}you are connected!`, 'info');
       this.router.navigate(['/home']);
     }
   }

   login(): void {
     console.log(this.usuario);
     if (this.usuario.username == null || this.usuario.password == null) {
       swal('Error Login', 'Username or password empty!', 'error');
       return;
     }

     this.authService.login(this.usuario).subscribe(response => {
       console.log(response);

       this.authService.guardarUsuario(response.access_token);
       this.authService.guardarToken(response.access_token);
       let usuario = this.authService.usuario;
       this.router.navigate(['/home']);
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



  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal({
      title: 'Logout',
      text: `Hi ${username}, you have successfully logged out!`,
      type: 'success',
      timer: 2000});
    this.router.navigate(['/home']);
  }

  public cambiarLenguaje(lang) {
   this.selectedLanguage = lang;
   this.translateService.use(lang);
 }




 public hideLogIn(): boolean{
  this.href = this.router.url;

  if (this.href == '/login') {
    return false;
  }

  return true;
 }

}
