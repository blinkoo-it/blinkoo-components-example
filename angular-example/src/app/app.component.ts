import { Component, OnInit } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { BlinkooWebInit } from '@blinkoo/components';
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
  shownId = 1

  ngOnInit(): void {
    this.initBlinkooLibrary();
  }

  async initBlinkooLibrary() {
    await BlinkooWebInit.init({
      apiKey: 'YOUR_API_KEY',
    });
    this.isInitialized = true;
  }

  changeShownId(id: number) {
    this.shownId = id;
  }
}
