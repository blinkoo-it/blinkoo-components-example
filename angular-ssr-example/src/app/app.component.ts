import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SingleVideoComponent } from './single-video/single-video.component';

type BlinkooModule = typeof import("@blinkoo/components");
@Component({
  selector: 'app-root',
  imports: [CommonModule, FeedComponent, SingleVideoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-example';
  isInitialized = false;
  shownId = 1

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    import("@blinkoo/components").then((blinkooModule) => {
      this.initBlinkooLibrary(blinkooModule);
    });
  }

  async initBlinkooLibrary(blinkooModule: BlinkooModule) {
    await blinkooModule.BlinkooWebInit.init({
      apiKey: 'YOUR_API_KEY',
    });
    this.isInitialized = true;
  }


  changeShownId(id: number) {
    this.shownId = id;
  }
}
