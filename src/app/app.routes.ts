import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

export const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'plasmic-host',
    component: SampleComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sample',
  },
];
