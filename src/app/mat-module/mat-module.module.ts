import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../Login-Sign-up/dialog.component';
import { HeaderComponent } from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [DialogComponent,HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatIconModule,MatToolbarModule
  ]
})
export class MatModuleModule { }
