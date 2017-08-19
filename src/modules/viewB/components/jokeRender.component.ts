import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from './../../core/services';

@Component({
  selector: 'joke-render',
  templateUrl: './jokeRender.component.html',
})
export class JokeRenderComponent {
  @Input() joke: string = '';
}