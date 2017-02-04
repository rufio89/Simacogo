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


  getState(): State{
    return this._currentState;
  }

  getCurrentState(): Array<Token> {
    return this._currentState.getCurrentState();
  }
  generateSuccessors(player): Array<Node>{
    let children: Array<Node> = new Array<Node>();
    let row1: State = this.generateRow(1, this._currentState, player);
    children.push(new Node(this, row1, "row1"));
    let row2: State = this.generateRow(2, this._currentState,  player);
    children.push(new Node(this, row2, "row2"));
    let row3: State = this.generateRow(3, this._currentState, player);
    children.push(new Node(this, row3, "row3"));
    let row4: State = this.generateRow(4, this._currentState, player);
    children.push(new Node(this, row4, "row4"));
    let row5: State = this.generateRow(5, this._currentState, player);
    children.push(new Node(this, row5, "row5"));
    let row6: State = this.generateRow(6, this._currentState, player);
    children.push(new Node(this, row6, "row6"));
    let row7: State = this.generateRow(7, this._currentState, player);
    children.push(new Node(this, row7, "row7"));
    let row8: State = this.generateRow(8, this._currentState, player);
    children.push(new Node(this, row8, "row8"));
    let row9: State = this.generateRow(9, this._currentState, player);
    children.push(new Node(this, row9, "row9"));

    this.printBoard(children);

    return children;
  }

  printBoard(children){
    for(var i=0; i<9;i++){
      for(var j=0;j<81;j+=9)
      console.log("[" + children[i].getCurrentState()[j+1].value + "]" + "[" + children[i].getCurrentState()[j+2].value + "]" + "[" + children[i].getCurrentState()[j+3].value + "]" + "[" + children[i].getCurrentState()[j+4].value + "]" + "[" + children[i].getCurrentState()[j+5].value + "]" + "[" + children[i].getCurrentState()[j+6].value + "]" + "[" + children[i].getCurrentState()[j+7].value + "]" + "[" + children[i].getCurrentState()[j+8].value + "]"  + "[" + children[i].getCurrentState()[j+9].value + "]" );
    }

  }

  generateRow(rowNum, currentState, player):State{
    return player.makeMoveAI(rowNum,currentState);

  }



}
