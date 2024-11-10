import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './Login-Sign-up/dialog.component';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatModuleModule } from './mat-module/mat-module.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,MatModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'z';

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
