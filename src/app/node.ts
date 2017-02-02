import {State} from "./state";
import {Token} from "./token";
import * as _ from "lodash";
export class Node {
  private _parent: Node;
  private _currentState: State;
  private _action: string;
  private _player1Score: number;
  private _player2Score: number;




  constructor(parent, state, action){
    this._parent = parent;
    this._currentState = state;
    this._action = action;
  }

  makeMove(rowInput, currentState, turn, color): State{
    var currentElem;
    var newState:State = _.cloneDeep(currentState);
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      console.log(typeof newState[i]);
      currentElem = document.getElementById("square-" + i);
      if(typeof newState[i] == "undefined" && currentElem.innerText == ""){
        newState.setCurrentStateValue(i,turn, color);
        break;
      }
    }
    return newState;
  }


  getCurrentState(): State {
    return this._currentState;
  }
  generateSuccessors(turn, color): Array<Node>{
    let children: Array<Node> = new Array<Node>();
    let row1: State = this.generateRow(1, this._currentState, turn, color);
    children.push(new Node(this, row1, "row1"));
    let row2: State = this.generateRow(2, this._currentState, turn, color);
    children.push(new Node(this, row2, "row2"));
    let row3: State = this.generateRow(3, this._currentState, turn, color);
    children.push(new Node(this, row3, "row3"));
    let row4: State = this.generateRow(4, this._currentState, turn, color);
    children.push(new Node(this, row4, "row4"));
    let row5: State = this.generateRow(5, this._currentState, turn, color);
    children.push(new Node(this, row5, "row5"));
    let row6: State = this.generateRow(6, this._currentState, turn, color);
    children.push(new Node(this, row6, "row6"));
    let row7: State = this.generateRow(7, this._currentState, turn, color);
    children.push(new Node(this, row7, "row7"));
    let row8: State = this.generateRow(8, this._currentState, turn, color);
    children.push(new Node(this, row8, "row8"));
    let row9: State = this.generateRow(9, this._currentState, turn, color);
    children.push(new Node(this, row9, "row10"));

    console.log(row1.getCurrentState()[64]);
    console.log(row1.getCurrentState()[65]);
    console.log(row1.getCurrentState()[66]);
    console.log(row1.getCurrentState()[67]);
    console.log(row1.getCurrentState()[68]);
    console.log(row1.getCurrentState()[69]);
    console.log(row1.getCurrentState()[70]);
    console.log(row1.getCurrentState()[71]);
    console.log(row1.getCurrentState()[72]);
    console.log(row1.getCurrentState()[73]);
    console.log(row1.getCurrentState()[74]);
    console.log(row1.getCurrentState()[75]);
    console.log(row1.getCurrentState()[76]);
    console.log(row1.getCurrentState()[77]);
    console.log(row1.getCurrentState()[78]);
    console.log(row1.getCurrentState()[79]);
    console.log(row1.getCurrentState()[80]);
    console.log(row1.getCurrentState()[81]);
    console.log(row1.getCurrentState()[82]);


    return children;
  }


  getPlayer1Score(): number{
    return this._player1Score;
  }

  getPlayer2Score(): number{
    return this._player2Score;
  }

  generateRow(rowNum, currentState, turn, color):State{
    return this.makeMove(rowNum,currentState, turn, color);

  }


}
