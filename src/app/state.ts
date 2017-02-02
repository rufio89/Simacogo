import {Token} from "./token";
export class State {
   private _currentState: Array<Token> = new Array<Token>(82);


  constructor(){
      this.generateBoard();
  };

  generateBoard(){
    for(var i=0;i<this._currentState.length;i++){
      this._currentState[i] = new Token();
    }
  }

  getCurrentState(): Array<Token>{
    return this._currentState;
  }

  setCurrentState(tokenArray){
    this._currentState = tokenArray;
  }

  setCurrentStateValue(i, newValue, newColor): void{
    this._currentState[i].setValue(newValue);
    this._currentState[i].setColor(newColor);
  }

  deepClone(oldArray: Array<Token>): Array<Token> {
    let newArray: Array<Token> = new Array<Token>();
    newArray = Object.assign({}, oldArray);

    return newArray;
  }







}
