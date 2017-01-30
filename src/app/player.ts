import {State} from "./state";
export class Player {


  constructor(){}

  makeMove(rowInput, currentState): State{
    var currentElem;
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      currentElem = document.getElementById("square-" + i);
      if(!currentState[i] && currentElem.innerText == ""){
        currentState.setCurrentState(i,"O", "#FFF");
        break;
      }
    }
    return currentState;
  }
}
