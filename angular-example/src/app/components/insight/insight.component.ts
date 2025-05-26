import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { BlinkooInsightElement } from '@blinkoo/components';

@Component({
  selector: 'app-insight',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './insight.component.html',
})
export class InsightComponent {
  @ViewChild('insight')
  insight!: ElementRef<BlinkooInsightElement>;
  @Input() customBaseUrl?: string;
  @Input() externalCustomerId?: string;
  @Input() utmSource?: string;
  @Input() utmCampaign?: string;
  @Input() referrer?: string;
  @Input() componentId?: string;

  sendCustomEvent(eventName: string, params: Record<string, string>) {
    this.insight.nativeElement.sendCustomEvent(eventName, params);
  }
}
