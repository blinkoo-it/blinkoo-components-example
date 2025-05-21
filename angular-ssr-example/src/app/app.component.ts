import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightComponent } from './insight/insight.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { FeedComponent } from './feed/feed.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    InsightComponent,
    SingleVideoComponent,
    FeedComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('feed')
  feed!: FeedComponent;

  @ViewChild('insight')
  insight!: InsightComponent;

  title = 'angular-ssr-example';
  shownId = 1;
  showCreator = false;

  changeShownId(id: number) {
    this.shownId = id;
  }

  toggleCreator() {
    this.showCreator = !this.showCreator;
  }

  togglePlayFeed() {
    this.feed.togglePlay();
  }

  sendCustomEvent() {
    this.insight.sendCustomEvent('custom event 1', {
      param1: 'value 1',
      param2: 'value2',
    });
  }
}
