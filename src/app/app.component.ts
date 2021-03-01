import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber:number[]=[];
  evenNumber:number[]=[];

  onFirefunAppC(lastNum:number){
    if (lastNum %2 ==0){
      this.evenNumber.push(lastNum);
    }else{
      this.oddNumber.push(lastNum);
    }

  }
}
