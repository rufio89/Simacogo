import {State} from "./state";
export class Node {
  private _parent: Node;
  private _currentState: State;
  private _action: string;
  private _cost: Number;
  private _turn: string;
  private _color: string;



  constructor(parent, state, action, cost){
    this._parent = parent;
    this._currentState = state;
    this._action = action;
    this._cost = cost;
  }

  makeMove(rowInput, currentState, turn, color): State{
    var currentElem;
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      currentElem = document.getElementById("square-" + i);
      if(!currentState[i] && currentElem.innerText == ""){
        currentState.setCurrentState(i,turn, color);
        break;
      }
    }
    return currentState;
  }


  generateSuccesors(turn, color): Array<Node>{
    let children: Array<Node>;
    let row1: State = this.generateRow1(this._currentState, turn, color);
    let row2: State = this.generateRow2(this._currentState, turn, color);
    let row3: State = this.generateRow3(this._currentState, turn, color);
    let row4: State = this.generateRow4(this._currentState, turn, color);
    let row5: State = this.generateRow5(this._currentState, turn, color);
    let row6: State = this.generateRow6(this._currentState, turn, color);
    let row7: State = this.generateRow7(this._currentState, turn, color);
    let row8: State = this.generateRow8(this._currentState, turn, color);
    let row9: State = this.generateRow9(this._currentState, turn, color);
    children.push(new Node(this, row1, "row1", 1 ));
    children.push(new Node(this, row2, "row2", 1 ));
    children.push(new Node(this, row3, "row3", 1 ));
    children.push(new Node(this, row4, "row4", 1 ));
    children.push(new Node(this, row5, "row5", 1 ));
    children.push(new Node(this, row6, "row6", 1 ));
    children.push(new Node(this, row7, "row7", 1 ));
    children.push(new Node(this, row8, "row8", 1 ));
    children.push(new Node(this, row9, "row9", 1 ));

    return children;
  }

  generateRow1(currentState, turn, color):State{
    let newState:State = this.makeMove(1,currentState, turn, color);
    return newState;

  }
  generateRow2(currentState, turn, color):State{
    let newState:State = this.makeMove(2,currentState, turn, color);
    return newState;
  }
  generateRow3(currentState, turn, color):State{
    let newState:State = this.makeMove(3,currentState, turn, color);
    return newState;
  }
  generateRow4(currentState, turn, color):State{
    let newState:State = this.makeMove(4,currentState, turn, color);
    return newState;
  }
  generateRow5(currentState, turn, color):State{
    let newState:State = this.makeMove(5,currentState, turn, color);
    return newState;
  }
  generateRow6(currentState, turn, color):State{
    let newState:State = this.makeMove(6,currentState, turn, color);
    return newState;
  }
  generateRow7(currentState, turn, color):State{
    let newState:State = this.makeMove(7,currentState, turn, color);
    return newState;
  }
  generateRow8(currentState, turn, color):State{
    let newState:State = this.makeMove(8,currentState, turn, color);
    return newState;
  }
  generateRow9(currentState, turn, color):State{
    let newState:State = this.makeMove(9,currentState, turn, color);
    return newState;
  }

}
