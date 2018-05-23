import {Input, Output, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef} from '@angular/core';
import {isInt} from '../../util/util';

export class NglCommonNotify {

  /**
   * The type of alert.
   */
  @Input() variant: 'error' | 'info' | 'success' | 'warning';

  @Input() iconName: string;

  @Input() assistiveText;
  @Input() closeButtonAssistiveText = 'Close' ;

  /**
   * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
   */
  @Input() set duration(duration: number) {
    this.clearTimeout();
    if (isInt(duration) && duration >= 0) {
      this.currentTimeout = setTimeout(() => this.close('timeout'), +duration);
    }
  }

  /**
   * Triggered by close button or duration timeout.
   */
  @Output('close') closeEventEmitter = new EventEmitter<string>();

  set dismissible(dismissible: boolean) {
    this._dismissible = dismissible;
    this.cd.markForCheck();
  }
  get dismissible() {
    return this._dismissible;
  }

  private _dismissible: boolean;

  private currentTimeout: any = null;

  constructor(private element: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef, type: 'alert' | 'toast') {
    this.renderer.addClass(this.element.nativeElement, 'slds-notify');
    this.renderer.addClass(this.element.nativeElement, `slds-notify_${type}`);
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'alert');
  }

  hostClass() {
    return {
      [`slds-theme_${this.variant || 'info'}`]: true,
    };
  }

  close(reason?: string, $event?: Event) {
    this.clearTimeout();
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    this.closeEventEmitter.emit(reason);
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  private clearTimeout() {
    if (this.currentTimeout !== null) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
  }
}
