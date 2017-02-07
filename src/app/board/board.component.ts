import {Component, OnInit, NgZone} from '@angular/core';
import {State} from "../state";
import {Token} from "../token";
import {Player} from "../player";
import {MiniMax} from "../mini-max";
import {Observable} from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent{
  boardSize: number = 4;
  currentState:State = new State();
  board: Array<Token>;
  rows:Array<number> = [1,2,3,4] ;
  player1: Player = new Player("O", "#FFF", false);
  player2: Player = new Player("X", "#000", true);
  player1Turn: boolean = true;
  player1Score: number=0;
  player2Score: number=0;
  ply: number =0;

  constructor(private _ngZone: NgZone) {
    this.board = this.currentState.getCurrentState();
    this.getPly();
  }



  roboTurn(){
    // Return state, flip player switch, and update the score for the UI.
    if (!this.player1Turn) {
      let m: MiniMax = new MiniMax(this.ply, 0, true, this.currentState);
      let s: State = m.run(this.player1, this.player2).getState();
      this.currentState = s;
      this.board = s.getCurrentState();
      this.player1Turn = !this.player1Turn;
      this.player2Score = s.getPlayer2Score();

    }
  }


  onSubmit(form: any, event:Event): void{
    console.log(form);
    if(this.player1Turn) {
      this.currentState = this.player1.makeMove(form.rowValue, this.currentState);
      this.player1Turn = !this.player1Turn;
      this.player1Score +=this.player1.getScore();
      setTimeout(()=> { this.roboTurn();});
    }

    //console.dir(this.currentState);
    //console.dir(this.board);
    //console.dir(event);
  }

  getPly() {
  var ply = prompt("Please enter the ply", "3");

  if (ply != null) {
    this.ply = parseInt(ply);
  }
}





}
