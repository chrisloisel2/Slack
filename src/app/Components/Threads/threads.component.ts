import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thread, ThreadsService } from '../../Services/threads.service';
import { MessagesComponent } from '../Messages/messages.component';
import { Message, MessagesService } from '../../Services/messages.service';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [CommonModule, MessagesComponent],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css',
})
export class ThreadsComponent implements OnInit {
  threads!: Thread[];
  actualThread!: Thread;
  messages!: Message[];

  constructor(
    private threadsService: ThreadsService,
    private messagesService: MessagesService
  ) {}

  selectThread(thread: Thread) {
    this.actualThread = thread;
    this.messagesService
      .getMessagesByThreadId(thread.id)
      .subscribe((messages: any) => {
        this.messages = messages;
        console.log(this.messages);
      });
  }
  // Observable

  ngOnInit() {
    this.threadsService.getThreads().subscribe((threads: any) => {
      this.threads = threads;
      console.log(this.threads);
    }); // Récupère les threads depuis le service
  }
}
