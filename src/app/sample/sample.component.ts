import { Component } from '@angular/core';
import { PlasmicReactComponent } from '../../plasmic/plasmic-react.component';

@Component({
  selector: 'app-sample',
  template: `<div>
    <main class="main">
      <div class="content">
        <h2>Plasmic Demo</h2>
        <fxr-plasmic component="HelpcenterPopup"></fxr-plasmic>
      </div>
    </main>
  </div>`,
  imports: [PlasmicReactComponent],
})
export class SampleComponent {}
