export class Token {
  value:string = "";
  color:string = "";

  constructor(){
    this.color = "";
    this.value = "";
  }



  public getValue(): string {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(value: string) {
    this.color = value;
  }



}
