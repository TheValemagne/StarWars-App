import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCardModule,
  MatProgressBarModule,
  MatSlideToggleModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {
}
