import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../store';
import {SongsService} from '../services/songs.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'songs-playlist',
  template: `
    <songs-list
      [list]="playlist$ | async"
      (toggle)="onToggle($event)"
    >
      <h2>Playlist</h2>
    </songs-list>
  `
})

export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$ = this.store.select('playlist');
  subscription: Subscription = new Subscription();

  constructor(private songsService: SongsService, private store: Store) {
  }

  ngOnInit() {
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }
}
