import { Component, OnInit } from '@angular/core';
import {State} from "../state";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent  {
  parent:Node;
  currentState:State = new State();
  board: Array<string>;
  valueControl = new FormControl();
  newValue = this.valueControl.value;

  constructor() {
    this.board = this.currentState.getCurrentState();

  }


  setRowInputValue(rowInput): void{
    var currentElem;
    for(var i = 72 + parseInt(rowInput);i >0;i-=9){
      currentElem = document.getElementById("square-" + i);
      if(!this.currentState[i] && currentElem.innerText == ""){
        this.currentState.setCurrentState(i,"O");
        break;
      }

    }
  }

  onSubmit(form: any): void{
    console.log(form);
    this.setRowInputValue(form.rowValue);
    console.dir(this.currentState);
    console.dir(this.board);
  }

}
