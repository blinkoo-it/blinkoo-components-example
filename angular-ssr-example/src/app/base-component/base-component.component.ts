import { isPlatformBrowser } from '@angular/common';
import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class BaseComponent implements OnInit {
  renderReady: boolean = false;

  constructor(protected platformId: Object) { }
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    import("@blinkoo/components").then(_ => {
      this.renderReady = true;
    });
  }
}
