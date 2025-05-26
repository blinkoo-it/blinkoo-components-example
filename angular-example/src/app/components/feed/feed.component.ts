import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import '@blinkoo/components';
import { BlinkooFeedElement, FeedScrollEvent } from '@blinkoo/components';

@Component({
  selector: 'app-feed',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html',
})
export class FeedComponent {
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

  @Output() feedScroll: EventEmitter<FeedScrollEvent> =
    new EventEmitter<FeedScrollEvent>();

  togglePlay() {
    this.feed.nativeElement.togglePlay();
  }

  next() {
    this.feed.nativeElement.next();
  }

  previous() {
    this.feed.nativeElement.previous();
  }

  onScroll(event: CustomEvent<FeedScrollEvent>) {
    this.feedScroll.next(event.detail);
  }
}
