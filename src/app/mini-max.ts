import {State} from "./state";
import {Node} from "./node";
import {Queue}  from "./queue"
export class MiniMax {
    private _depth: number;
    private _index: number;
    private _isMax: boolean;
    private _scores: Queue<Node> = new Queue<Node>();

    private _currentState: State;

    constructor(depth, index, isMax, currentState){
      this._depth = depth;
      this._index = index;
      this._isMax = isMax;
      this._currentState = currentState;

    }

    run():Node{
      this._scores.push(new Node(null, this._currentState, "A"));
      return this.minimax(this._depth, this._index, this._isMax, this._scores,"X", "#000", this._scores);
    }

    minimax(depth, index, isMax, scores, turn, color, current): Node{
      current = scores.pop();
      if(depth==0){
        return current;
      }
      let successors: Array<Node> = current.generateSuccessors(turn, color);
      for(var i in successors){
        scores.push(successors[i]);
      }
      if(isMax){
        return this.max(this.minimax(depth-1, index*2, !isMax, scores,  "0", "#FFF", current), this.minimax(depth-1, index*2+1, !isMax, scores,  "O", "#FFF", current));
      }
      else{
        return this.min(this.minimax(depth-1, index*2, !isMax, scores,  "X", "#000", current), this.minimax(depth-1, index*2+1, !isMax, scores,  "X", "#000", current));
      }
    }


    max(node1, node2): Node{
      if(this.utility(node1) > this.utility(node2)){
        return node1;
      }
      else{
        return node2;
      }
    }

  min(node1, node2): Node{
    if(this.utility(node1) < this.utility(node2)){
      return node1;
    }
    else{
      return node2;
    }
  }

    utility(node1) : number{
      if(node1.getPlayer1Score() > node1.getPlayer2Score()){
        return 1;
      }
      else if(node1.getPlayer2Score() > node1.getPlayer1Score()){
        return -1;
      }
      else{
        return 0;
      }
    }


}
