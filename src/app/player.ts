import {State} from "./state";
export class Player {
  private _score: number =0;


  constructor(){

  }

  makeMove(rowInput, currentState, turn, color): State{
    var currentElem;
    let index: number = 0;
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      currentElem = document.getElementById("square-" + i);
      if(!currentState[i] && currentElem.innerText == ""){
        currentState.setCurrentState(i,turn, color);
        index = i;
        break;
      }
    }
    console.log(turn);
    this.checkNextTo(currentState,index, turn);
    this.checkDiagonal(currentState,index, turn);
    return currentState;
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
