import {Component, OnInit} from '@angular/core';
import {Store} from '../../store';
import {SongsService} from '../services/songs.service';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'songs-listened',
  template: `
    <songs-list
      [list]="listenedSongs$ | async"
      (toggle)="onToggle($event)"
    >
      <h2>Listened</h2>
    </songs-list>
  `
})

export class SongsListenedComponent implements OnInit {

  listenedSongs$: Observable<any> = new Observable<any>();

  constructor(private songsService: SongsService, private store: Store) {
  }

  ngOnInit() {
    this.listenedSongs$ = this.store.select('playlist').pipe(map(song => song.filter((song: any) => song?.listened)));
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }

}
