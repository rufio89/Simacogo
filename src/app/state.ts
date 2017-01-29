export class State {
   currentState: Array<string> = new Array<string>(82);


  constructor(){

  };



  getCurrentState(): Array<string>{
    return this.currentState;
  }

  setCurrentState(i, newValue): void{
    this.currentState[i]= newValue;
  }

}
