import {State} from "./state";
import {Token} from "./token";
import * as _ from "lodash";
export class Node {
  private _parent: Node;
  private _currentState: State;
  private _action: string;
  private _player1Score: number;
  private _player2Score: number;




  constructor(parent, state, action, player1Score, player2Score){
    this._parent = parent;
    this._currentState = state;
    this._action = action;
    this._player1Score = player1Score;
    this._player2Score = player2Score;
  }

  getParent(): Node {
    return this._parent;
  }

  getAction(): string{
    return this._action;
  }


  getPlayer1Score(): number {
    return this._player1Score;
  }

  getPlayer2Score(): number {
    return this._player2Score;
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
    let row2: State = this.generateRow(2, this._currentState,  player);
    let row3: State = this.generateRow(3, this._currentState, player);
    let row4: State = this.generateRow(4, this._currentState, player);
    let row5: State = this.generateRow(5, this._currentState, player);
    // let row6: State = this.generateRow(6, this._currentState, player);
    // let row7: State = this.generateRow(7, this._currentState, player);
    // let row8: State = this.generateRow(8, this._currentState, player);
    // let row9: State = this.generateRow(9, this._currentState, player);
    if(row1!=null){children.push(new Node(this, row1, "row1", row1.getPlayer1Score(), row1.getPlayer2Score()));}
    if(row2!=null){children.push(new Node(this, row2, "row2", row2.getPlayer1Score(), row2.getPlayer2Score()))};
    if(row3!=null){children.push(new Node(this, row3, "row3", row3.getPlayer1Score(), row3.getPlayer2Score()))};
    if(row4!=null){children.push(new Node(this, row4, "row4", row4.getPlayer1Score(), row4.getPlayer2Score()))};
    if(row5!=null){children.push(new Node(this, row5, "row5", row5.getPlayer1Score(), row5.getPlayer2Score()))};
    // if(row6!=null){children.push(new Node(this, row6, "row6", row6.getPlayer1Score(), row6.getPlayer2Score()))};
    // if(row7!=null){children.push(new Node(this, row7, "row7", row7.getPlayer1Score(), row7.getPlayer2Score()))};
    // if(row8!=null){children.push(new Node(this, row8, "row8", row8.getPlayer1Score(), row8.getPlayer2Score()))};
    // if(row9!=null){children.push(new Node(this, row9, "row9", row9.getPlayer1Score(), row9.getPlayer2Score()))};



    //this.printBoard(children);

    return children;
  }

  printBoard(children){
    let boardSize: number = this._currentState.getBoardSize();
    for(var i=0; i< boardSize;i++){
      for(var j=0;j<(boardSize*boardSize);j+=boardSize)
      console.log("[" + children[i].getCurrentState()[j].value + "]" + "[" + children[i].getCurrentState()[j+1].value + "]" + "[" + children[i].getCurrentState()[j+2].value + "]" + "[" + children[i].getCurrentState()[j+3].value + "]" + "[" + children[i].getCurrentState()[j+4].value + "]" + "[" + children[i].getCurrentState()[j+5].value + "]" + "[" + children[i].getCurrentState()[j+6].value + "]" + "[" + children[i].getCurrentState()[j+7].value + "]"  + "[" + children[i].getCurrentState()[j+8].value + "]");
    }
  }

  generateRow(rowNum, currentState, player):State{
    return player.makeMoveAI(rowNum,currentState);

  }
  evaluate() : number{
    let player1Score: number = this._player1Score;
    let player2Score : number = this._player2Score;
    return player2Score - player1Score;
  }




}
