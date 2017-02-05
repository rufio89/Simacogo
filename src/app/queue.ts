export class Queue<T> {
  _store: Array<T> = new Array<T>();
  push(val: T) {
    this._store.unshift(val);
  }
  get(index){
    return this._store[index];
  }

  pop(): T | undefined {
    return this._store.shift();
  }

}
