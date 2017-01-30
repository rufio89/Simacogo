import { Component, OnInit } from '@angular/core';
import {State} from "../state";
import {Token} from "../token";
import {Player} from "../player";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  currentState:State = new State();
  board: Array<Token>;
  rows:Array<Number> = [1,2,3,4,5,6,7,8,9] ;
  player1: Player = new Player();
  player2: Player = new Player();
  constructor() {
    this.board = this.currentState.getCurrentState();
  }



  onSubmit(form: any): void{
    console.log(form);
    this.currentState = this.player1.makeMove(form.rowValue, this.currentState);
    console.dir(this.currentState);
    console.dir(this.board);
  }

}
