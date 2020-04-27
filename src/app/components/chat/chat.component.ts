import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  constructor(private chatService: ChatService) {
    this.chatService.cargarMensajes()
      .subscribe( () => {

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      });
  }

  get usuario(){
    return this.chatService.usuario;
  }

  get chats(){
    return this.chatService.chats;
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length === 0){
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then( () => {
          console.log('mensaje enviado');
          this.mensaje = '';
        })
      .catch( (err) => console.error('error al guardar', err));
  }
}
