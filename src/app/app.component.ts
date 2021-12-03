import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                         //for user-defined tags
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:number=100;      //data type declaration, not possible in javascript
  name:string="Samyak"
  age:number=21;
  result:boolean=true
}
