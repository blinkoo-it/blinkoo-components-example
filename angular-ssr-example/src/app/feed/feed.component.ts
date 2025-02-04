import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { BlinkooFeedComponent } from '@blinkoo/components';

@Component({
    selector: 'app-feed',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './feed.component.html',
    styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  isBrowser: boolean = false;
  feedImported: boolean = false;
  
  apiKey = 'YOUR_API_KEY';
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedComponent>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      import("@blinkoo/components").then(module => {
        // Utilizza la libreria solo lato client
        this.feedImported = true;
      });
    }
  }
}
