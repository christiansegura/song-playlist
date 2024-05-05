import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SongsFavoritesComponent} from './songs-favorites/songs-favorites.component';
import {SongsListenedComponent} from './songs-listened/songs-listened.component';
import {SongsPlaylistComponent} from './songs-playlist/songs-playlist.component';
import {SongsService} from './services/songs.service';
import {SongsListComponent} from './songs-list/songs-list-component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsListComponent
  ],
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  exports: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ],
  providers: [
    SongsService
  ]
})

export class SongsModule {
}
