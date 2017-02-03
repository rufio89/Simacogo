import {State} from "./state";
import * as _ from "lodash";
export class Player {

  private _score: number =0;
  private _gamePiece: string;
  private _gamePieceColor:string;
  private _isAI:boolean;

  constructor(piece, color, isAI){
    this._gamePiece = piece;
    this._gamePieceColor = color;
    this._isAI = isAI;
  }

  getIsAI(): boolean {
    return this._isAI;
  }

  setIsAI(value: boolean) {
    this._isAI = value;
  }
  getGamePiece(): string {
    return this._gamePiece;
  }

  setGamePiece(value: string) {
    this._gamePiece = value;
  }

  getGamePieceColor(): string {
    return this._gamePieceColor;
  }

  setGamePieceColor(value: string) {
    this._gamePieceColor = value;
  }


  makeMove(rowInput, currentState): State{
    var currentElem;
    var index: Number = 0;
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      console.log(currentState.getCurrentState()[i].value == "");
      currentElem = document.getElementById("square-" + i);

      if(currentState.getCurrentState()[i].value == ""){
        currentState.setCurrentStateValue(i, this._gamePiece, this._gamePieceColor);
        index = i;
        break;
      }
    }
    this.checkNextTo(currentState,index, this._gamePiece);
    this.checkDiagonal(currentState,index, this._gamePiece);
    return currentState;
  }

  makeMoveAI(rowInput, currentState): State{
    var currentElem;
    var index: Number = 0;
    var newState:State = _.cloneDeep(currentState);
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      console.log(newState.getCurrentState()[i].value == "");
      currentElem = document.getElementById("square-" + i);

      if(newState.getCurrentState()[i].value == ""){
        newState.setCurrentStateValue(i, this._gamePiece, this._gamePieceColor);
        index = i;
        break;
      }
    }
    this.checkNextTo(currentState,index, this._gamePiece);
    this.checkDiagonal(currentState,index, this._gamePiece);
    return newState;
  }

  checkNextTo(currentState, index, turn){
    var up = parseInt(index)-9;
    var down = parseInt(index)+9;
    var left = parseInt(index)-1;
    var right = parseInt(index)+1;
    if (typeof currentState.getCurrentState()[up].getValue() !== "undefined") {
      if (currentState.getCurrentState()[up].getValue()==turn) {
        this.increaseScore(2);
      }
    }
      if (typeof currentState.getCurrentState()[down] !== "undefined") {
        if (currentState.getCurrentState()[down].getValue()==turn) {
          this.increaseScore(2);
        }
      }
      if (typeof currentState.getCurrentState()[left] !== "undefined") {
        if (currentState.getCurrentState()[left].getValue()==turn) {
          this.increaseScore(2);
        }
      }
      if (typeof currentState.getCurrentState()[right] !== "undefined") {
        if (currentState.getCurrentState()[right].getValue()==turn) {
          this.increaseScore(2);
        }
      }

  }

  checkDiagonal(currentState, index, turn) {
    var upLeft = parseInt(index) - (9 + 1);
    var upRight = parseInt(index) + (9 + 1);
    var downLeft = parseInt(index) - (9 - 1);
    var downRight = parseInt(index) + (9 + 1);

    if (typeof currentState.getCurrentState()[upLeft] !== "undefined") {
      if (currentState.getCurrentState()[upLeft].getValue()==turn) {
        this.increaseScore(1);
      }
    }
    if (typeof currentState.getCurrentState()[upRight] !== "undefined"){
      if (currentState.getCurrentState()[upRight].getValue()==turn) {
        this.increaseScore(1);
      }
    }
    if (typeof currentState.getCurrentState()[downLeft] !== "undefined"){
      if (currentState.getCurrentState()[downLeft].getValue()==turn) {
        this.increaseScore(1);
      }
    }
    if (typeof currentState.getCurrentState()[downRight] !== "undefined"){
      if (currentState.getCurrentState()[downRight].getValue()==turn) {
        this.increaseScore(1);
      }
    }
  }

  getScore(): number{
    return this._score;
  }



  increaseScore(value): void {
    this._score +=value;
  }
}
