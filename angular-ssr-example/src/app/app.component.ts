import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightComponent } from './components/insight/insight.component';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedScrollEvent } from '@blinkoo/components';

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

  @ViewChild('singleVideo')
  video!: SingleVideoComponent;

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

  togglePlayVideo() {
    this.video.togglePlay();
  }

  sendCustomEvent() {
    this.insight.sendCustomEvent('custom event 1', {
      param1: 'value 1',
      param2: 'value2',
    });
  }

  onScroll(data: FeedScrollEvent) {
    console.log('scroll', data);
  }
}
