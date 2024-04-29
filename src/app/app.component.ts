import { Component } from '@angular/core';
import {Store} from './store';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div>Playlist app</div>
  <div *ngFor="let playlist of playlist$ | async; let i = index">
    {{playlist?.id}} - {{playlist?.band}}
  </div>
  <pre>{{playlist$ | async | json}}</pre>

  <songs-playlist></songs-playlist>
  <songs-listened></songs-listened>
  <songs-favorites></songs-favorites>
  `,
})
export class AppComponent {
  title = 'state-management';
  playlist$ = this.store.select('playlist');
  constructor(private store: Store) {
    this.store.set('playlist', [{id: 1, band: 'pantera'}, {id: 2, band: 'metallica'}, {id:3, band: 'slayer'}]);
    this.store.set('playlist-2', [{id: 1, band: 'drake'}, {id: 2, band: 'juicy j'}, {id:3, band: 't-pain'}]);
  }
}
