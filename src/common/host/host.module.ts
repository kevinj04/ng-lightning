// Thanks to https://github.com/trotyl/angular-contrib/tree/master/packages/common/host

import { NgModule } from '@angular/core';
import { NgHost } from './host';

@NgModule({
  declarations: [NgHost],
  exports: [NgHost],
})
export class NgHostModule { }
