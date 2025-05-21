import { isPlatformBrowser } from '@angular/common';
import { Directive, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Directive()
export abstract class BaseComponent implements OnInit {
  renderReady: boolean = false;

  protected platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    import('@blinkoo/components').then((_) => {
      this.renderReady = true;
    });
  }
}
