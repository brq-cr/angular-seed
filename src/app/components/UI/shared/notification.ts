import { Component,Input } from '@angular/core';
 
@Component({
    selector: 'ngb-notification',
    template: `
      <div *ngIf="message && message.text" [ngClass]="{ 'notification': message.text, 'notification-success': message.type === 'SUCCESS', 'notification-danger': message.type === 'ERROR' }">{{message.text}}</div>
    `
})
export class NotificationComponent {
   @Input() message;
}