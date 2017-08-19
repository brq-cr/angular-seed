import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from './../../core/services';

@Component({
  selector: 'view-b',
  templateUrl: './viewB.component.html',
})
export class ViewBComponent implements OnInit {
  joke$: Observable<string>;
  constructor(
    private jokeService: JokeService,
  ){}

  ngOnInit () {
    this.joke$ = this.jokeService.getRandomJokeState();
  }

  getRandomJoke () {
    this.jokeService.getRandomJoke();
  }
  
}
