import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgHostModule } from '../common/host/host.module';

import {NglSpinner} from './spinner';

@NgModule({
  declarations: [NglSpinner],
  exports: [NglSpinner],
  imports: [CommonModule, NgHostModule],
})
export class NglSpinnersModule {}
