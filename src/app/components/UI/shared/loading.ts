import { Component,Input } from '@angular/core';

@Component({
    selector: 'ngb-loading-indicator',
    template: `
      <div *ngIf="show">LOADING....</div>
    `
})
export class LoadingComponent {
   @Input() show;
}