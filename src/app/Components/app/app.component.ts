import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsComponent } from '../Threads/threads.component';
import { MessagesComponent } from '../Messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ThreadsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Slack';
}
