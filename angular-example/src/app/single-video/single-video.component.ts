import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';

import '@blinkoo/components';
import { BlinkooSingleVideoComponent } from '@blinkoo/components';

@Component({
  selector: 'app-single-video',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-video.component.html'
})
export class SingleVideoComponent {
  @ViewChild('singleVideo') singleVideo!: ElementRef<BlinkooSingleVideoComponent>;
  @Input() postId?: string;
  @Input() title?: string;
  @Input() aspectRatio?: number;
}
