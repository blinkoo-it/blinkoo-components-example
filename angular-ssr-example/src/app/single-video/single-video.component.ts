import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-single-video',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './single-video.component.html'
})
export class SingleVideoComponent extends BaseComponent {
  @ViewChild('singleVideo') singleVideo!: ElementRef<SingleVideoComponent>;
  @Input() postId?: string;
  @Input() title?: string;
  @Input() aspectRatio?: number;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    super(platformId);
  }
}
