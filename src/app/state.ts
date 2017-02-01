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

  setCurrentState(currentState){
    this._currentState = currentState.getCurrentState();
  }

  setCurrentStateValue(i, newValue, newColor): void{
    this._currentState[i].setValue(newValue);
    this._currentState[i].setColor(newColor);
  }

}
