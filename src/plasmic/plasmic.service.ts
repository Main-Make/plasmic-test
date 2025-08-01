import { Injectable, effect, inject } from '@angular/core';
import {
  type ComponentRenderData,
  type GlobalVariantSpec,
  type PlasmicComponentLoader,
  initPlasmicLoader,
} from '@plasmicapp/loader-react';
import { environment } from '../environment';

@Injectable({ providedIn: 'root' })
export class PlasmicService {
  loader?: PlasmicComponentLoader;
  prefetchedData?: ComponentRenderData;
  globalVariants?: GlobalVariantSpec[];
  pageParams?: Record<string, object>;
  pageQuery?: Record<string, object>;

  /**
   *
   */
  constructor() {
    this.loader = initPlasmicLoader({
      projects: [
        {
          id: environment.plasmic.projectId!,
          token: environment.plasmic.apiToken,
        },
      ],
      preview: true,
    });
  }
}
