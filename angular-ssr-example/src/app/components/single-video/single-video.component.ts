import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { BaseComponent } from '../../base-component/base-component.component';
import { BlinkooSingleVideoElement } from '@blinkoo/components';

@Component({
  selector: 'app-single-video',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-video.component.html',
})
export class SingleVideoComponent extends BaseComponent {
  @ViewChild('singleVideo')
  singleVideo!: ElementRef<BlinkooSingleVideoElement>; // TODO put correct interface

  @Input() customBaseUrl?: string;
  @Input() assetsPath?: string;
  @Input() externalCustomerId?: string;
  @Input() utmSource?: string;
  @Input() utmCampaign?: string;
  @Input() referrer?: string;
  @Input() componentId?: string;
  @Input() postId?: string;
  @Input() autoplay?: boolean;
  @Input() muted?: boolean;
  @Input() showCreator?: boolean;

  togglePlay() {
    this.singleVideo.nativeElement.togglePlay();
  }
}
