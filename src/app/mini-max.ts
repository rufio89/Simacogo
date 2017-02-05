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

      this._scores.push(new Node(null, this._currentState, "ROOT", 0, 0));
      let current: Node = this.minimax(this._depth,  this._isMax, this._scores, this._scores, players, p2);
      while(current.getParent().getAction()!= "ROOT"){
        current = current.getParent();
      }

      return current;
    }

    minimax(depth, isMax, scores, current, players, player): Node{

      current = scores.pop();
      if(depth==0){
        return current;
      }

      let successors: Array<Node> = current.generateSuccessors(player);
      for(var i in successors){
        scores.push(successors[i]);
      }
      console.log(scores.length());

      if(isMax){
        return this.max(this.minimax(depth-1, !isMax, scores, current, players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]) );
      }
      else{
        return this.min(this.minimax(depth-1, !isMax, scores,  current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]));
      }

    }


    max(node1, node2, node3, node4, node5): Node{
      let n1 = {value: this.utility(node1), name: "n1"};
      let n2 = {value: this.utility(node2), name: "n2"};
      let n3 = {value: this.utility(node3), name: "n3"};
      let n4 = {value: this.utility(node4), name: "n4"};
      let n5 = {value: this.utility(node5), name: "n5"};
      let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>(5);
      nodeArray.push({value:n1.value, name:n1.name});
      nodeArray.push({value:n2.value, name:n2.name});
      nodeArray.push({value:n3.value, name:n3.name});
      nodeArray.push({value:n4.value, name:n4.name});
      nodeArray.push({value:n5.value, name:n5.name});
      nodeArray.sort(function(a,b){ return a.value-b.value});
      let max = nodeArray[4];
      if(max.name =="n1") return node1;
      if(max.name =="n2") return node2;
      if(max.name =="n3") return node3;
      if(max.name =="n4") return node4;
      if(max.name =="n5") return node5;

    }

  min(node1, node2, node3, node4, node5): Node{
    let n1 = {value: this.utility(node1), name: "n1"};
    let n2 = {value: this.utility(node2), name: "n2"};
    let n3 = {value: this.utility(node3), name: "n3"};
    let n4 = {value: this.utility(node4), name: "n4"};
    let n5 = {value: this.utility(node5), name: "n5"};
    let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>(5);
    nodeArray.push({value:n1.value, name:n1.name});
    nodeArray.push({value:n2.value, name:n2.name});
    nodeArray.push({value:n3.value, name:n3.name});
    nodeArray.push({value:n4.value, name:n4.name});
    nodeArray.push({value:n5.value, name:n5.name});
    nodeArray.sort(function(a,b){ return a.value-b.value});
    let max = nodeArray[0];
    if(max.name =="n1") return node1;
    if(max.name =="n2") return node2;
    if(max.name =="n3") return node3;
    if(max.name =="n4") return node4;
    if(max.name =="n5") return node5;
  }

    utility(node1) : number{
      let player1Score: number = node1.getPlayer1Score();
      let player2Score : number = node1.getPlayer2Score();
      if(player2Score > player1Score){
        return 1;
      }
      else if(player1Score > player2Score){
        return -1;
      }
      else{
        return 0;
      }
    }





}
