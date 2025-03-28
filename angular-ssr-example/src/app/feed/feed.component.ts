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

import {
  BlinkooFeedComponent,
  BlinkooFeedConfiguration,
} from '@blinkoo/components';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-feed',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feed.component.html',
})
export class FeedComponent extends BaseComponent {
  @ViewChild('feed') feed!: ElementRef<BlinkooFeedComponent>;
  @Input() title?: string;
  @Input() filters?: string;
  @Input() playlistFilter?: string;
  @Input() aspectRatio?: number;
  @Input() feedPosition?: number;
  @Input() configurations?: BlinkooFeedConfiguration;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

  get jsonConfigurations(): string {
    return this.blinkooWebUtils!.encodeObject(this.configurations);
  }
}
