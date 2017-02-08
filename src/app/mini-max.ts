import {State} from "./state";
import {Node} from "./node";
import {Queue}  from "./queue"
import {Player} from "./player";
export class MiniMax {
    private _depth: number;
    private _index: number;
    private _isMax: boolean;
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

      let current: Node = new Node(null, this._currentState, "ROOT", 0, 0);
      if(current.getState().isTerminal()) {
        return current;
      }
      else {
        let minmaxResult = this.minimax(this._depth, this._isMax, current, players, p2);
        while (minmaxResult.node.getParent().getAction() !== "ROOT") {
          minmaxResult.node = minmaxResult.node.getParent();
        }
        ;
        return minmaxResult.node;
      }
    }

    minimax(depth, isMax, current, players, player): {node: Node, value: number}{
      if(depth==0 || current.getState().isTerminal()){
        return {node: current, value: current.evaluate()};
      }

      if(isMax){
        let best: {node: Node, value: number} = {node: current, value:Number.NEGATIVE_INFINITY};
        let successors: Array<Node> = current.generateSuccessors(player);
        for(var i=0;i<successors.length;i++){
          let next = this.minimax(depth-1, !isMax, successors[i], players, players[0]);
          best = this.max(next, best);
        }
        return best;
      }
      else{
        let best: {node: Node, value: number} = {node: current, value:Number.POSITIVE_INFINITY};
        let successors: Array<Node> = current.generateSuccessors(player);
        for(var i=0;i<successors.length;i++){
          let next = this.minimax(depth-1, !isMax, successors[i], players, players[1]);
          best = this.min( next, best);
        }
        return best;
      }

    }

  max( next, best): {node: Node, value: number}{
    if(next.value > best.value){
      return {node: next.node, value: next.value};
    }
    else{
      return {node: best.node,value: best.value};
    }

  }

  min( next, best): {node: Node, value: number}{
    if(next.value < best.value) {
      return {node: next.node, value: next.value};
    }
    else{
        return {node: best.node,value: best.value};
    }
  }







}
