import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FeedComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
}
