import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from '../../store';
import {Song} from '../../songs/services/songs.service';
import {faHeart, faHeadphones} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'songs-list',
  styleUrls: ['songs-list.component.scss'],
  template: `
    <div class="songs-list p-16">
      <h3 class="text-5xl mb-16">
        <ng-content></ng-content>
      </h3>
      <ul class="divide-y divide-gray-100 text-xl">
        <li *ngFor="let item of list; let i = index" class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <p>{{ item?.artist }}</p> -
            <span>{{ item?.track }}</span>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <div class="songs-list__favourite" [class.active]="item.favorite" (click)="toggleItem(i, 'favorite')"><i
              class="fa-solid fa-heart"></i>
              <fa-icon [icon]="faHeart"></fa-icon>
            </div>
            <div class="songs-list__listened" [class.active]="item.listened" (click)="toggleItem(i, 'listened')"><i
              class="fa-solid fa-headphones-simple">
              <fa-icon [icon]="faHeadphones"></fa-icon>
            </i></div>
          </div>
        </li>
      </ul>
    </div>
  `
})

export class SongsListComponent {
  faHeart = faHeart;
  faHeadphones = faHeadphones;
  @Input() list: Song[] = [];
  @Output() toggle = new EventEmitter();

  constructor(private store: Store) {
  }


  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: {...track, [prop]: !track[prop]}
    });
  }

}
