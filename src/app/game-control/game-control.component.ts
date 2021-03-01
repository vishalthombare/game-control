import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired= new EventEmitter<number>();
  Interval:any;
  lastNumber=0;

  constructor() { }

  ngOnInit(): void {
  }
  onClickFired(){
    this.Interval=setInterval(()=>{
      this.intervalFired.emit(this.lastNumber +1);
      this.lastNumber++;
    },1000);
  }

  onClickStoped(){
    clearInterval(this.Interval)
  }

}
