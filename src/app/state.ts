import {Token} from "./token";
export class State {
   currentState: Array<Token> = new Array<Token>(82);


  constructor(){
    this.generateBoard();
  };

  generateBoard(){
    for(var i=0;i<this.currentState.length;i++){
      this.currentState[i] = new Token();
    }
  }

  getCurrentState(): Array<Token>{
    return this.currentState;
  }

  setCurrentState(i, newValue, newColor): void{
    this.currentState[i].setValue(newValue);
    this.currentState[i].setColor(newColor);
  }

}
