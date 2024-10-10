import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import '@blinkoo/components';
import { BlinkooFeedComponent } from '@blinkoo/components';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  apiKey = 'YOUR_API_KEY';
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedComponent>;
}
