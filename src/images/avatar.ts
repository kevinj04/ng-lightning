import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.pug',
  host: {
    '[class.slds-avatar]': 'true',
  }
})
export class NglAvatar {
  @Input() src: string = '';
  @Input() alternativeText: string = '';

  @Input() size: string;

  @Input() variant: string;

  @Input() initials: string;

  @Input() fallbackIconName = 'standard:user';

  @Output() onError = new EventEmitter();

  private error = false;

  hostClass() {
    return {
      [`slds-avatar_${this.size || 'medium'}`]: true,
      [`slds-avatar_${this.variant || 'rectangle'}`]: true,
    };
  }

  fallbackIconClass() {
    const [category, icon] = this.fallbackIconName.split(':');
    return `slds-icon-${category}-${icon}`;
  }

  get shouldShowImage() {
    return this.src && !this.error;
  }

  onImgError() {
    this.error = true;
    this.onError.emit();
  }

};
