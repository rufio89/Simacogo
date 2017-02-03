export class Queue<T> {
  _store: Array<T> = new Array<T>();
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }

}
