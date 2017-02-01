export class Token {
  private _value:string = "";
  private _color:string = "";

  constructor(){

  }



  public getValue(): string {
    return this._value;
  }

  public setValue(value: string) {
    this._value = value;
  }

  public getColor(): string {
    return this._color;
  }

  public setColor(value: string) {
    this._color = value;
  }



}
