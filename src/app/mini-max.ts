import {State} from "./state";
import {Node} from "./node";
import {Queue}  from "./queue"
import {Player} from "./player";
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

    run(player1, player2):Node{
      let p1: Player= player1;
      let p2: Player= player2;
      let players: Array<Player>= new Array<Player>(2);
      players[0] = p1;
      players[1] = p2;

      this._scores.push(new Node(null, this._currentState, "A"));
      return this.minimax(this._depth, this._index, this._isMax, this._scores, this._scores, players, p2);
    }

    minimax(depth, index, isMax, scores, current, players, player): Node{
      current = scores.pop();
      if(depth==0){
        return current;
      }
      let successors: Array<Node> = current.generateSuccessors(player);
      for(var i in successors){
        scores.push(successors[i]);
      }
      if(isMax){
        return this.max(this.minimax(depth-1, index*2, !isMax, scores, current, players, players[0]), this.minimax(depth-1, index*2+1, !isMax, scores, current,  players, players[0]));
      }
      else{
        return this.min(this.minimax(depth-1, index*2, !isMax, scores,  current, players, players[1]), this.minimax(depth-1, index*2+1, !isMax, scores, current, players, players[1]));
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
