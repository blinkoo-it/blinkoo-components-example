import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { BlinkooSingleVideoElement } from '@blinkoo/components';

@Component({
  selector: 'app-single-video',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-video.component.html',
})
export class SingleVideoComponent {
  @ViewChild('singleVideo')
  singleVideo!: ElementRef<BlinkooSingleVideoElement>; // TODO put correct interface
  @Input() customBaseUrl?: string;
  @Input() externalCustomerId?: string;
  @Input() utmSource?: string;
  @Input() utmCampaign?: string;
  @Input() referrer?: string;
  @Input() componentId?: string;

  @Input() postId?: string;
  @Input() autoplay?: boolean;
  @Input() muted?: boolean;
  @Input() showCreator?: boolean;

  toggleVideo() {
    this.singleVideo.nativeElement.togglePlay();
  }
}
