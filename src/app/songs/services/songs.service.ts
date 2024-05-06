import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../store';
import {map, Observable} from 'rxjs';

const PLAYLIST_API = 'http://localhost:3000/playlist';

export interface Song {
  id: number,
  artist: string,
  track: string,
  listened: boolean,
  favorite: boolean,

  [key: string]: any
}

@Injectable()

export class SongsService {
  getPlaylist$: Observable<Song[]> = this.http.get(PLAYLIST_API).pipe(
    map((res: any) => {
      console.log(res);
      this.store.set('playlist', res);
      return res.playlist;
    })
  );

  constructor(private http: HttpClient, private store: Store) {
  }

  toggle(event: any) {
    console.log(event);
    this.http.put(PLAYLIST_API + '/' + event.track.id, event.track)
      .pipe(map(res => res))
      .subscribe((track: any) => {
        const value = this.store.value.playlist;
        const playlist = value.map((song) => {
          if (event.track.id === song.id) {
            return {...song, ...event.track};
          } else {
            return song;
          }
        });
        this.store.set('playlist', playlist);
      });
  }
}
