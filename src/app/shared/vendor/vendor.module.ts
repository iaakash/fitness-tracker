import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const modules = [MatProgressSpinnerModule, MatSelectModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, FlexLayoutModule, MatDatepickerModule];

@NgModule({
  imports: [...modules],
  declarations: [],
  exports: [ ...modules]
})
export class VendorModule { }
