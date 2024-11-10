import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../Login-Sign-up/dialog.component';
@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  data:number=1

  constructor(private dialog:MatDialog){}
  onSignUp(){
    console.log("hello world")
    this.dialog.open(DialogComponent,{
      width:'30%',
    })
    }
    onLogin(){
      console.log("clicked on the login")
      this.dialog.open(DialogComponent,{
        width:'30%',
        data:this.data,
      })
    }
}
