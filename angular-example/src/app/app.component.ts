import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { SingleVideoComponent } from './components/single-video/single-video.component';
import { InsightComponent } from './components/insight/insight.component';

@Component({
  selector: 'app-root',
  imports: [
    FeedComponent,
    SingleVideoComponent,
    CommonModule,
    InsightComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('insight')
  insight!: InsightComponent;

  @ViewChild('feed')
  feed!: FeedComponent;

  title = 'angular-example';
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
