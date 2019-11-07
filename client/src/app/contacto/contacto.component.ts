import { Component, OnInit } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';
import { Router, ActivatedRoute } from '@angular/router';

import {formatDate } from '@angular/common';



import swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    contacto: Contacto = new Contacto();

    errores: string[];

    currentDate = new Date();

    today= new Date();
    jstoday = '';

  constructor(private contactoService: ContactoService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {
      this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
     }




  ngOnInit() {
  }




  create(): void {
    formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.contacto.createAt = new Date();
    console.log(this.jstoday);
    console.log(this.contacto);
    this.contactoService.create(this.contacto)
      .subscribe(
        contacto => {
          this.router.navigate(['/contacto']);
          //(<HTMLFormElement>document.getElementById("contactoForm")).reset();
          swal({
            title: 'Message sent',
            text: `Your message has been sent`,
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


  sendEmail(): void {
    console.log(this.contacto);
    this.contactoService.sendEmail(this.contacto)
      .subscribe(
        contacto => {
          (<HTMLFormElement>document.getElementById("contactoForm")).reset();
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }


  comparador(): void{
    let element = <HTMLInputElement> document.getElementById("defaultCheck1");
    if (element.checked) {
      this.sendEmail();
    }
  }


}
