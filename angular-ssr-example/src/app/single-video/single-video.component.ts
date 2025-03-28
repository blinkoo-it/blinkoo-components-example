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
import { BlinkooFeedConfiguration } from '@blinkoo/components';

@Component({
  selector: 'app-single-video',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-video.component.html',
})
export class SingleVideoComponent extends BaseComponent {
  @ViewChild('singleVideo') singleVideo!: ElementRef<SingleVideoComponent>;
  @Input() postId?: string;
  @Input() title?: string;
  @Input() aspectRatio?: number;
  @Input() configurations?: BlinkooFeedConfiguration;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }

  get jsonConfigurations(): string {
    return this.blinkooWebUtils!.encodeObject(this.configurations);
  }
}
