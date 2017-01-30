export class Token {
  private _value:string ="";
  private _color:string = "";

  constructor(){
    this._value = "";
    this._color = "";
  }



  getValue(): string {
    return this._value;
  }

  setValue(value: string) {
    this._value = value;
  }

  getColor(): string {
    return this._color;
  }

  setColor(value: string) {
    this._color = value;
  }



}
