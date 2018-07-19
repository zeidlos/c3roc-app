import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LendItemPage } from './lend-item';

@NgModule({
  declarations: [
    LendItemPage,
  ],
  imports: [
    IonicPageModule.forChild(LendItemPage),
  ],
})
export class LendItemPageModule {}
