import { Component, OnInit } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { BlinkooFeedConfiguration, BlinkooWebInit } from '@blinkoo/components';
import { CommonModule } from '@angular/common';
import { SingleVideoComponent } from './single-video/single-video.component';

@Component({
  selector: 'app-root',
  imports: [FeedComponent, SingleVideoComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-example';
  isInitialized = false;
  shownId = 1;
  configurations: BlinkooFeedConfiguration = {
    isCreatorEnabled: true,
  };

  ngOnInit(): void {
    this.initBlinkooLibrary();
  }

  async initBlinkooLibrary() {
    await BlinkooWebInit.init({
      customApiBasePath: 'http://localhost:4000', // only for development, remove parameter in production
    });
    this.isInitialized = true;
  }

  changeShownId(id: number) {
    this.shownId = id;
  }
}
