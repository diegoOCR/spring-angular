import { Component, OnInit } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Mensaje } from './models/mensaje';

import { URL_BACKEND } from '../config/config';

import { Config } from '../config/config';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private urlEndPoint: string = URL_BACKEND + '/chat-websocket';

  private client: Client;
  conectado: boolean = false;

  mensaje: Mensaje = new Mensaje();
  mensajes: Mensaje[] = [];

  escribiendo: string;
  clienteId: string;

  constructor(private config: Config) {
    this.clienteId = 'id-' + new Date().getTime() + '-' + Math.random().toString(36).substr(2);
  }

  ngOnInit() {
    this.config.placeholder();
    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS(this.urlEndPoint);
    }

    this.client.onConnect = (frame) => {
      console.log('connected: ' + this.client.connected + ' : ' + frame);
      this.conectado = true;

      this.client.subscribe('/chat/mensaje', e => {
        let mensaje: Mensaje = JSON.parse(e.body) as Mensaje;
        mensaje.fecha = new Date(mensaje.fecha);

        if (!this.mensaje.color && mensaje.tipo == 'NUEVO_USUARIO' && this.mensaje.username == mensaje.username) {
          this.mensaje.color = mensaje.color;
        }


        this.mensajes.push(mensaje);
        console.log(mensaje);
      });

      this.client.subscribe('/chat/escribiendo', e => {
        this.escribiendo = e.body;

        setTimeout(() => this.escribiendo = '', 3000);

      });

      console.log(this.clienteId);

      this.client.subscribe('/chat/historial/' + this.clienteId, e => {
        const historial = JSON.parse(e.body) as Mensaje[];
        this.mensajes = historial.map(m => {
          m.fecha = new Date(m.fecha);
          return m;
        }).reverse();
      })


      this.client.publish({destination: '/app/historial', body: this.clienteId})

      this.mensaje.tipo = 'NUEVO_USUARIO';
      this.client.publish({ destination: '/app/mensaje', body: JSON.stringify(this.mensaje) });
    }


    this.client.onDisconnect = (frame) => {
      console.log('disconnected: ' + !this.client.connected + ' : ' + frame);
      this.conectado = false;

      this.mensaje = new Mensaje();
      this.mensajes = [];
    }

  }


  conectar(): void {
    this.client.activate();
  }


  desconectar(): void {
    this.client.deactivate();
  }


  enviarMensaje(): void {
    this.mensaje.tipo = 'MENSAJE';
    this.client.publish({ destination: '/app/mensaje', body: JSON.stringify(this.mensaje) });
    this.mensaje.texto = '';
  }


  escribiendoEvento(): void {
    this.client.publish({ destination: '/app/escribiendo', body: this.mensaje.username });
  }

}
