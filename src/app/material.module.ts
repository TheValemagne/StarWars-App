import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}