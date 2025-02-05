import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import '@blinkoo/components';
import { BlinkooFeedComponent } from '@blinkoo/components';

@Component({
  selector: 'app-feed',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedComponent>;
  @Input() title?: string;
  @Input() filters?: string;
  @Input() playlistFilter?: string;
  @Input() aspectRatio?: number;
  @Input() feedPosition?: number;
}
