import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';
  public chats: Observable<any[]>;

  constructor(
    firestore: AngularFirestore,
    private chatService: ChatService){
    this.chats = firestore.collection('chats').valueChanges();
  }

  get usuario(){
    return this.chatService.usuario;
  }

  salir(){
    this.chatService.logout();
  }

}
