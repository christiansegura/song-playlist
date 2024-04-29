import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SongsFavoritesComponent} from './songs-favorites/songs-favorites.component';
import {SongsListenedComponent} from './songs-listened/songs-listened.component';
import {SongsPlaylistComponent} from './songs-playlist/songs-playlist.component';

@NgModule({
  declarations: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ],
  providers: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ]
})

export class SongsModule {
}
