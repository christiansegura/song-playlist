import {Component, OnInit} from '@angular/core';
import {Store} from '../../store';
import {SongsService} from '../services/songs.service';
import {filter, map, Observable} from 'rxjs';

@Component({
  selector: 'songs-favorites',
  template:`
    <songs-list
      [list]="favorites$ | async"
      (toggle)="onToggle($event)"
    >
      <h2>Favorites</h2>
    </songs-list>
  `
})
 export class SongsFavoritesComponent implements OnInit{
  favorites$: Observable<any> = new Observable<any>();
  constructor(private store: Store, private songsService: SongsService) {
  }
  ngOnInit() {
    this.favorites$ = this.store.select('playlist').pipe(map(playlist =>  playlist.filter((track: any) => track?.favorite)));
  }
  onToggle(event: any){
    this.songsService.toggle(event);
  }
}
