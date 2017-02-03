import { Component, OnInit } from '@angular/core';
import {State} from "../state";
import {Token} from "../token";
import {Player} from "../player";
import {MiniMax} from "../mini-max";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  currentState:State = new State();
  board: Array<Token>;
  rows:Array<number> = [1,2,3,4,5,6,7,8,9] ;
  player1: Player = new Player("O", "#FFF", false);
  player2: Player = new Player("X", "#000", true);
  player1Turn: boolean = true;
  player1Score: number=0;
  player2Score: number=0;

  constructor() {
    this.board = this.currentState.getCurrentState();
  }


  roboTurn(){
    // Return state, flip player switch, and update the score for the UI.
    if(!this.player1Turn) {
      let m: MiniMax = new MiniMax(3, 0, true, this.currentState);
      this.currentState = m.run(this.player1, this.player2).getState();
      this.player1Turn = !this.player1Turn;
      this.player2Score = this.player2.getScore();
    }
  }

  onSubmit(form: any, event:Event): void{
    console.log(form);
    if(this.player1Turn) {
      this.currentState = this.player1.makeMove(form.rowValue, this.currentState);
      this.player1Turn = !this.player1Turn;
      this.player1Score = this.player1.getScore();

    }

    console.dir(this.currentState);
    console.dir(this.board);
    console.dir(event);
  }

  ngAfterViewChecked() {
   this.roboTurn();
  }


}
