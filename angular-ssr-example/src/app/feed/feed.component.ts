import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import { BlinkooFeedElement } from '@blinkoo/components';

@Component({
  selector: 'app-feed',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html',
})
export class FeedComponent extends BaseComponent {
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedElement>;

  @Input() customBaseUrl?: string;
  @Input() assetsPath?: string;
  @Input() externalCustomerId?: string;
  @Input() utmSource?: string;
  @Input() utmCampaign?: string;
  @Input() referrer?: string;
  @Input() componentId?: string;
  @Input() title?: string;
  @Input() filters?: string;
  @Input() playlist?: string;
  @Input() position?: number;
  @Input() autoplay?: boolean;
  @Input() muted?: boolean;
  @Input() showCreator?: boolean;

  togglePlay() {
    this.feed.nativeElement.togglePlay();
  }

  next() {
    this.feed.nativeElement.next();
  }

  previous() {
    this.feed.nativeElement.previous();
  }
}
