import {Token} from "./token";
export class State {
   private _boardSize: number = 4;
   private _currentState: Array<Token> = new Array<Token>(16);
   private _player1Score: number;
   private _player2Score: number;


  constructor(){
      this.generateBoard();
      this._player1Score = 0;
      this._player2Score = 0;
  };

  generateBoard(){
    for(var i=0;i<this._currentState.length;i++){
      this._currentState[i] = new Token();
    }
  }

  isTerminal():boolean{
    for(var i=0;i<this._boardSize;i++){
      if(this._currentState[i].getValue() == "") {return false;}
    }
    return true;
  }



  getBoardSize(): number{
    return this._boardSize;
  }

  getCurrentState(): Array<Token>{
    return this._currentState;
  }

  setCurrentState(tokenArray){
    this._currentState = tokenArray;
  }

  getCurrentStateValue(i): string{
    return this._currentState[i].getValue();
  }

  setCurrentStateValue(i, newValue, newColor): void{
    this._currentState[i].setValue(newValue);
    this._currentState[i].setColor(newColor);
  }

  getPlayer1Score(): number {
    return this._player1Score;
  }

  setPlayer1Score(value: number) {
    this._player1Score = value;
  }

  getPlayer2Score(): number {
    return this._player2Score;
  }

  setPlayer2Score(value: number) {
    this._player2Score = value;
  }

  addPlayer1Score(value:number){
    this._player1Score += value;
  }

  addPlayer2Score(value:number){
    this._player2Score += value;
  }








}
