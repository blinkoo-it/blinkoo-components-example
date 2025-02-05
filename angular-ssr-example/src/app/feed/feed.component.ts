import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { BlinkooFeedComponent } from '@blinkoo/components';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-feed',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html'
})
export class FeedComponent extends BaseComponent {
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedComponent>;
  @Input() title?: string;
  @Input() filters?: string;
  @Input() playlistFilter?: string;
  @Input() aspectRatio?: number;
  @Input() feedPosition?: number;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }
}
