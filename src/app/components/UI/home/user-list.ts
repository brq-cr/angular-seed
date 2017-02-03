import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngb-home-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <span>{{user.node.name}}</span>
      </li>
    </ul>
  `,
  styles: [`
    li span {
      color: blue;
    }
  `]
})
export class HomeUserListComponent {
  @Input() users;
}