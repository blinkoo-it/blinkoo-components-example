import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, FeedComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ssr-example';
}
