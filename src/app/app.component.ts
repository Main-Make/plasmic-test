import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlasmicReactComponent } from '../plasmic/plasmic-react.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plasmic-test';
}
