import { isPlatformBrowser } from '@angular/common';
import { Directive, OnInit } from '@angular/core';

type BlinkooWebUtils = typeof import('@blinkoo/components').BlinkooWebUtils;
@Directive()
export abstract class BaseComponent implements OnInit {
  renderReady: boolean = false;
  blinkooWebUtils?: BlinkooWebUtils;

  constructor(protected platformId: Object) {}
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    import('@blinkoo/components').then((_) => {
      this.blinkooWebUtils = _.BlinkooWebUtils;
      this.renderReady = true;
    });
  }
}
