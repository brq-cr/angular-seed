import { 
  Component, 
  ChangeDetectionStrategy 
} from '@angular/core';

@Component({
  selector: 'ngb-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Hey! It looks like this page doesn't exist yet.
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPageComponent { }
