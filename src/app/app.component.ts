import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FilsComponent } from './fils/fils.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test11';
  valparent:string = ''
  valf:String = ''
  valeur2:string='binding 2 directions'
  eventCounter=1
  TwoWayInput:any
  valeurDfils(event:any){
     this.valf=event
  }
  method1(){
    return 2;
  }
  isAdmin=false;
  increment(){
    this.eventCounter ++;
  }
  decrement(){
    this.eventCounter --;
  }
}
