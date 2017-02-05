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
    let boardSize: number = currentState.getBoardSize();
    var currentElem;
    var index: Number = 0;
    for(var i = ((boardSize*boardSize) -(boardSize+1)) + parseInt(rowInput);i >0;i-=boardSize){
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
    let boardSize: number = currentState.getBoardSize();
    var currentElem;
    var index: Number = 0;
    var newState:State = _.cloneDeep(currentState);
    for(var i = ((boardSize*boardSize) -(boardSize+1)) + parseInt(rowInput);i >0;i-=boardSize){
      currentElem = document.getElementById("square-" + i);

      if(newState.getCurrentState()[i].value == ""){
        newState.setCurrentStateValue(i, this._gamePiece, this._gamePieceColor);
        index = i;
        break;
      }
    }
    this.checkNextTo(currentState,index, this._gamePiece);
    this.checkDiagonal(currentState,index, this._gamePiece);
    this.setPlayerScore(newState);
    this._score = 0;
    return newState;
  }

  setPlayerScore(newState): void{
    if(this._isAI){
      newState.addPlayer2Score(this._score);
    }
    else{
      newState.addPlayer1Score(this._score);
    }
  }

  checkNextTo(currentState, index, turn){
    let boardSize = currentState.getBoardSize();
    var up = parseInt(index)-boardSize;
    var down = parseInt(index)+boardSize;
    var left = parseInt(index)-1;
    var right = parseInt(index)+1;
    if(index ==0){
      this.checkNextToRight(currentState, right, turn);
      this.checkNextToDown(currentState,down,turn);
    }
    else if(index==boardSize-1){
      this.checkNextToLeft(currentState, left, turn);
      this.checkNextToDown(currentState,down,turn);
    }
    else if(index==(boardSize*boardSize -(boardSize))){
      this.checkNextToRight(currentState, right, turn);
      this.checkNextToUp(currentState,up,turn);
    }
    else if(index ==(boardSize*boardSize)-1){
      this.checkNextToUp(currentState, up, turn);
      this.checkNextToLeft(currentState,left,turn);
    }
    else if(index >0 && (boardSize*boardSize -(boardSize)) && index%boardSize==0){
      this.checkNextToUp(currentState, up, turn);
      this.checkNextToRight(currentState,right,turn);
      this.checkNextToDown(currentState, down, turn);
    }
    else if(index > 0 && index < boardSize){
      this.checkNextToLeft(currentState, left, turn);
      this.checkNextToDown(currentState,down,turn);
      this.checkNextToRight(currentState, right, turn);
    }
    else if(index > boardSize && index < ((boardSize*boardSize)-1) && (index+1)%9==0){
      this.checkNextToUp(currentState, up, turn);
      this.checkNextToLeft(currentState, left,turn);
      this.checkNextToDown(currentState, down, turn);
    }
    else if(index > (boardSize*boardSize -(boardSize)) && index < ((boardSize*boardSize)-1)){
      this.checkNextToLeft(currentState, left, turn);
      this.checkNextToUp(currentState,up,turn);
      this.checkNextToRight(currentState, right, turn);
    }
    else{
      this.checkNextToUp(currentState, up, turn);
      this.checkNextToDown(currentState,down,turn);
      this.checkNextToLeft(currentState, left, turn);
      this.checkNextToRight(currentState, right, turn);
    }




  }
  checkNextToUp(currentState, up, turn) {
    if (typeof currentState.getCurrentState()[up].getValue() !== "undefined") {
      if (currentState.getCurrentState()[up].getValue()==turn) {
        this.increaseScore(2);
      }
    }
  }
  checkNextToDown(currentState, down, turn) {
    if (typeof currentState.getCurrentState()[down] !== "undefined") {
      if (currentState.getCurrentState()[down].getValue() == turn) {
        this.increaseScore(2);
      }
    }
  }

  checkNextToLeft(currentState, left, turn) {
    if (typeof currentState.getCurrentState()[left] !== "undefined") {
      if (currentState.getCurrentState()[left].getValue() == turn) {
        this.increaseScore(2);
      }
    }
  }
  checkNextToRight(currentState, right, turn) {
    if (typeof currentState.getCurrentState()[right] !== "undefined") {
      if (currentState.getCurrentState()[right].getValue() == turn) {
        this.increaseScore(2);
      }
    }
  }

  checkDiagonal(currentState, index, turn) {
    let boardSize = currentState.getBoardSize();
    var upLeft = parseInt(index) - (boardSize + 1);
    var upRight = parseInt(index) - (boardSize + 1);
    var downLeft = parseInt(index) + (boardSize - 1);
    var downRight = parseInt(index) + (boardSize + 1);



    if(index ==0){
      this.checkDownRight(currentState, downRight, turn);
    }
    else if(index==boardSize-1){
      this.checkDownLeft(currentState, downLeft, turn);
    }
    else if(index==(boardSize*boardSize -(boardSize))){
      this.checkUpRight(currentState, upRight, turn);
    }
    else if(index == ((boardSize*boardSize)-1)){
      this.checkUpLeft(currentState, upLeft, turn);
    }
    else if(index >0 && index < ((boardSize*boardSize)-boardSize) && index%boardSize==0){
      this.checkUpRight(currentState, downRight, turn);
      this.checkDownRight(currentState, downRight, turn);
    }
    else if(index > 0 && index < boardSize){
      this.checkDownLeft(currentState, downLeft, turn);
      this.checkNextToRight(currentState, downRight, turn);
    }
    else if(index > boardSize && index < ((boardSize*boardSize)-1) && (index+1)%boardSize==0){
      this.checkUpLeft(currentState, upLeft, turn);
      this.checkDownLeft(currentState, downLeft, turn);
    }
    else if(index > ((boardSize*boardSize)-boardSize) && index < ((boardSize*boardSize)-1)){
      this.checkUpLeft(currentState, upLeft, turn);
      this.checkUpRight(currentState, upRight, turn);
    }
    else{
      this.checkUpLeft(currentState, upLeft, turn);
      this.checkUpRight(currentState,upRight,turn);
      this.checkDownLeft(currentState, downLeft, turn);
      this.checkDownRight(currentState, downRight, turn);
    }
  }

  checkUpLeft(currentState, upLeft,turn) {
    if (typeof currentState.getCurrentState()[upLeft] !== "undefined") {
      if (currentState.getCurrentState()[upLeft].getValue()==turn) {
      this.increaseScore(1);
      }
    }
  }

  checkUpRight(currentState, upRight,turn){
    if (typeof currentState.getCurrentState()[upRight] !== "undefined") {
      if (currentState.getCurrentState()[upRight].getValue() == turn) {
        this.increaseScore(1);
      }
    }
  }
  checkDownLeft(currentState, downLeft,turn){
    if (typeof currentState.getCurrentState()[downLeft] !== "undefined") {
      if (currentState.getCurrentState()[downLeft].getValue() == turn) {
        this.increaseScore(1);
      }
    }
  }
  checkDownRight(currentState, downRight,turn){
    if (typeof currentState.getCurrentState()[downRight] !== "undefined") {
      if (currentState.getCurrentState()[downRight].getValue() == turn) {
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
