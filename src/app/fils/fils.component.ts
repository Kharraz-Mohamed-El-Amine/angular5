import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-fils',
  imports: [FormsModule],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.scss',
})
export class FilsComponent {
  valfils:string = ''
  @Input() valeurDParent:string =''
  @Output() valeurFilsEvent= new EventEmitter<String>()
  
  constructor(public test:TestService){
    this.test.addData("element1");

  }
  


  EmitterUneValeur(){
     this.valeurFilsEvent.emit(this.valfils)
  }
}
