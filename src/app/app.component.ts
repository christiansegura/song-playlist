import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<br>
<br>
  <div class="container mx-auto text-white">
    <div class="grid grid-cols-3 gap-4">
      <div class="bg-violet-800">
        <songs-playlist></songs-playlist>
      </div>
      <div class="bg-violet-800">
        <songs-listened></songs-listened>
      </div>
      <div class="bg-violet-800">
        <songs-favorites></songs-favorites>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent {
  title = 'state-management';
}
