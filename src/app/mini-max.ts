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
      if(current == undefined){ return ;}
      if(current.getState().isTerminal()){
        return current;
      }
      if(depth==0){
        return current;
      }

      let successors: Array<Node> = current.generateSuccessors(player);
      for(var i in successors){
        scores.push(successors[i]);
      }


      if(scores.length()==2){
        let a: number = 5;
      }

      if(isMax){
        return this.max(this.minimax(depth-1,  !isMax, scores, current,  players, players[0]),this.minimax(depth-1,  !isMax, scores, current,  players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]), this.minimax(depth-1,  !isMax, scores, current,  players, players[0]) );
      }
      else{
        return this.min(this.minimax(depth-1, !isMax, scores, current, players, players[1]),this.minimax(depth-1, !isMax, scores, current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]), this.minimax(depth-1, !isMax, scores, current, players, players[1]));
      }

    }
//   max(node1, node2, node3): Node{
//     let n1, n2, n3;
//     let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>();
//     if(node1 != undefined) {
//       n1 = {value: this.evaluate(node1), name: "n1"};
//       nodeArray.push({value:n1.value, name:n1.name});
//     };
//     if(node2 != undefined) {
//         n2 = {value: this.evaluate(node2), name: "n2"}
//         nodeArray.push({value:n2.value, name:n2.name});
//     };
//     if(node3 != undefined) {
//       n3 = {value: this.evaluate(node3), name: "n3"};
//       nodeArray.push({value:n3.value, name:n3.name});
//     };
//
//     nodeArray.sort(function(a,b){ return a.value-b.value});
//     let max = nodeArray[nodeArray.length-1];
//     if(max.name =="n1") return node1;
//     if(max.name =="n2") return node2;
//     if(max.name =="n3") return node3;
// ;
//   }
//
//   min(node1, node2, node3): Node{
//     let n1, n2, n3;
//     let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>();
//     if(node1 != undefined) {
//       n1 = {value: this.evaluate(node1), name: "n1"};
//       nodeArray.push({value:n1.value, name:n1.name});
//     };
//     if(node2 != undefined) {
//       n2 = {value: this.evaluate(node2), name: "n2"}
//       nodeArray.push({value:n2.value, name:n2.name});
//     };
//     if(node3 != undefined) {
//       n3 = {value: this.evaluate(node3), name: "n3"};
//       nodeArray.push({value:n3.value, name:n3.name});
//     };
//     nodeArray.sort(function(a,b){ return a.value-b.value});
//     let max = nodeArray[0];
//     if(max.name =="n1") return node1;
//     if(max.name =="n2") return node2;
//     if(max.name =="n3") return node3;
//   }


    max(node1, node2, node3, node4): Node{
      let n1, n2, n3, n4, n5,n6,n7,n8, n9;
    let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>();
    if(node1 != undefined) {
      n1 = {value: this.evaluate(node1), name: "n1"};
      nodeArray.push({value:n1.value, name:n1.name});
    };
    if(node2 != undefined) {
      n2 = {value: this.evaluate(node2), name: "n2"}
      nodeArray.push({value:n2.value, name:n2.name});
    };
    if(node3 != undefined) {
      n3 = {value: this.evaluate(node3), name: "n3"};
      nodeArray.push({value:n3.value, name:n3.name});
    };
    if(node4!= undefined) {
      n4 = {value: this.evaluate(node4), name: "n4"}
      nodeArray.push({value:n4.value, name:n4.name});
    };
    // if(node5 != undefined) {
    //   n5 = {value: this.evaluate(node5), name: "n5"};
    //   nodeArray.push({value:n5.value, name:n5.name});
    // };
    // if(node6 != undefined) {
    //   n6 = {value: this.evaluate(node6), name: "n6"}
    //   nodeArray.push({value:n6.value, name:n6.name});
    // };
    // if(node7 != undefined) {
    //   n7 = {value: this.evaluate(node7), name: "n7"};
    //   nodeArray.push({value:n7.value, name:n7.name});
    // };
    // if(node8!= undefined) {
    //   n8 = {value: this.evaluate(node8), name: "n8"}
    //   nodeArray.push({value:n8.value, name:n8.name});
    // };
    // if(node9 != undefined) {
    //   n9 = {value: this.evaluate(node9), name: "n9"};
    //   nodeArray.push({value:n9.value, name:n9.name});
    // };

      nodeArray.sort(function(a,b){ return a.value-b.value});
      let max = nodeArray[nodeArray.length-1];
      if(max.name =="n1") return node1;
      if(max.name =="n2") return node2;
      if(max.name =="n3") return node3;
      if(max.name =="n4") return node4;
      // if(max.name =="n5") return node5;
      // if(max.name =="n6") return node6;
      // if(max.name =="n7") return node7;
      // if(max.name =="n8") return node8;
      // if(max.name =="n9") return node9;

    }

  min(node1, node2, node3, node4): Node{
    let n1, n2, n3, n4, n5,n6,n7,n8, n9;
    let nodeArray: Array<{value:number, name:string}> = new Array<{value:number, name:string}>();
    if(node1 != undefined) {
      n1 = {value: this.evaluate(node1), name: "n1"};
      nodeArray.push({value:n1.value, name:n1.name});
    };
    if(node2 != undefined) {
      n2 = {value: this.evaluate(node2), name: "n2"}
      nodeArray.push({value:n2.value, name:n2.name});
    };
    if(node3 != undefined) {
      n3 = {value: this.evaluate(node3), name: "n3"};
      nodeArray.push({value:n3.value, name:n3.name});
    };
    if(node4!= undefined) {
      n4 = {value: this.evaluate(node4), name: "n4"}
      nodeArray.push({value:n4.value, name:n4.name});
    };
    // if(node5 != undefined) {
    //   n5 = {value: this.evaluate(node5), name: "n5"};
    //   nodeArray.push({value:n5.value, name:n5.name});
    // };
    // if(node6 != undefined) {
    //   n6 = {value: this.evaluate(node6), name: "n6"}
    //   nodeArray.push({value:n6.value, name:n6.name});
    // };
    // if(node7 != undefined) {
    //   n7 = {value: this.evaluate(node7), name: "n7"};
    //   nodeArray.push({value:n7.value, name:n7.name});
    // };
    // if(node8!= undefined) {
    //   n8 = {value: this.evaluate(node8), name: "n8"}
    //   nodeArray.push({value:n8.value, name:n8.name});
    // };
    // if(node9 != undefined) {
    //   n9 = {value: this.evaluate(node9), name: "n9"};
    //   nodeArray.push({value:n9.value, name:n9.name});
    // };
    let min = nodeArray[0];
    if(min.name =="n1") return node1;
    if(min.name =="n2") return node2;
    if(min.name =="n3") return node3;
    if(min.name =="n4") return node4;
    // if(min.name =="n5") return node5;
    // if(min.name =="n6") return node6;
    // if(min.name =="n7") return node7;
    // if(min.name =="n8") return node8;
    // if(min.name =="n9") return node9;
  }

    evaluate(node1) : number{
      let player1Score: number = node1.getPlayer1Score();
      let player2Score : number = node1.getPlayer2Score();
      return player2Score - player1Score;
    }





}
