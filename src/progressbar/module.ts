import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgHostModule} from '../common/host/host.module';

import {NglProgressBar} from './progressbar';

@NgModule({
  declarations: [NglProgressBar],
  exports: [NglProgressBar],
  imports: [CommonModule, NgHostModule],
})
export class NglProgressBarModule {}
