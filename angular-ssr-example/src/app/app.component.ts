import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { BlinkooFeedConfiguration } from '@blinkoo/components';

type BlinkooModule = typeof import('@blinkoo/components');
@Component({
  selector: 'app-root',
  imports: [CommonModule, FeedComponent, SingleVideoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-example';
  isInitialized = false;
  shownId = 1;
  configurations: BlinkooFeedConfiguration = {
    isCreatorEnabled: true,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    import('@blinkoo/components').then((blinkooModule) => {
      this.initBlinkooLibrary(blinkooModule);
    });
  }

  async initBlinkooLibrary(blinkooModule: BlinkooModule) {
    await blinkooModule.BlinkooWebInit.init({
      customApiBasePath: 'http://localhost:4000', // only for development, remove parameter in production
    });
    this.isInitialized = true;
  }

  changeShownId(id: number) {
    this.shownId = id;
  }
}
