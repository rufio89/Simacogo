export class Queue<T> {

  _store: T[] = [];

  custructor(){}

  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }

}
