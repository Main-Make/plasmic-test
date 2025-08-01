/* eslint-disable @typescript-eslint/no-explicit-any */
//Documentation: https://www.notion.so/fx-replay/Plasmic-Integration-2409db20207480898d20d4a0538bfd7b
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { renderToElement } from '@plasmicapp/loader-react';
import { PlasmicService } from './plasmic.service';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import YooptaEditor, { createYooptaEditor } from '@yoopta/editor';
import { createElement } from 'react';
import YooptaWrapper from './dummy'; // adjust the path

@Component({
  selector: 'fxr-plasmic',
  template: ' <div #root [id]="id"></div>',
  standalone: true,
})
export class PlasmicReactComponent implements AfterViewInit, OnChanges {
  @ViewChild('root', { static: true }) root!: ElementRef<HTMLElement>;
  @Input() component!: string;
  @Input() projectId?: string;
  props?: Record<string, object>;

  id: string = Math.random().toString(36).substring(2, 15);

  private initialized = false;

  constructor(
    private plasmic: PlasmicService,
    private elRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  /**
   * Detect changes in component inputs and rebuild props if necessary.
   * This is different than ngOnChanges because it allows for more granular control
   * over when to check for changes, which is useful for performance optimization.
   * This method is called on every change detection cycle.
   * @returns
   */
  ngOnChanges(): void {
    if (!this.initialized) return;
    this.render();
  }

  ngAfterViewInit(): void {
    this.initialized = true;
    this.render();
  }

  private render(): void {
    console.log('Rendering Plasmic component:', this.root.nativeElement);
    const root = createRoot(this.root.nativeElement);
    const editorReactComponent = createElement(YooptaWrapper);
    const res = createPortal(editorReactComponent, this.root.nativeElement);
    root.render(res);
    console.log('YooptaEditor created:', res);
    // this.root.nativeElement;
    // if (!this.plasmic.loader || !this.root?.nativeElement) return;
    // renderToElement(
    //   this.plasmic.loader,
    //   this.root.nativeElement,
    //   {
    //     name: this.component,
    //   },
    //   {
    //     componentProps: this.props,
    //     globalVariants: this.plasmic.globalVariants,
    //     prefetchedData: this.plasmic.prefetchedData,
    //     pageParams: this.plasmic.pageParams,
    //     pageQuery: this.plasmic.pageQuery,
    //   }
    // );
  }
}
