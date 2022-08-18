import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  //exports array will be created to exportsa the modules
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,

  ]
})//this module is imported in the app.module.ts file
export class MaterialModule { }
