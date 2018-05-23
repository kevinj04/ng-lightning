import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngl-spinner',
  templateUrl: './spinner.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-spinner]': 'true',
    '[attr.role]': 'status',
  }
})
export class NglSpinner {

  /**
   * The size of the spinner.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

  /**
   * The variant changes the appearance of the spinner.
   */
  @Input() variant: 'brand' | 'inverse';

  /**
   * The alternative text used to describe the reason for the wait and need for a spinner.
   */
  @Input() alternativeText: string;

  hostClass() {
    return {
      [`slds-spinner_${this.size || 'medium'}`]: true,
      [`slds-spinner_${this.variant}`]: !!this.variant,
    };
  }
};
