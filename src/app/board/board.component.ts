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
  player1Turn: boolean = true;
  player1Score: Number=0;
  player2Score: Number=0;
  constructor() {
    this.board = this.currentState.getCurrentState();
  }



  onSubmit(form: any): void{
    console.log(form);
    if(this.player1Turn) {
      this.currentState = this.player1.makeMove(form.rowValue, this.currentState, "O", "#FFF");
      this.player1Turn = !this.player1Turn;
      this.player1Score = this.player1.getScore();
    }
    else{
      this.currentState = this.player2.makeMove(form.rowValue, this.currentState, "X", "#000");
      this.player1Turn = !this.player1Turn;
      this.player2Score = this.player2.getScore();
    }
    console.dir(this.currentState);
    console.dir(this.board);
  }

}
