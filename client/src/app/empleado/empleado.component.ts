import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private config: Config) { }

  ngOnInit() {
    this.config.placeholder();
  }





}
