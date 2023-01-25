import { makeAutoObservable } from 'mobx';

class Counter {
    count = 0;

    timer = 60;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count = this.count + 1;
    }

    decrement() {
        this.count = this.count - 1;
    }

    // with makeAutoObservable all functions with get will be computed
    get total() {
        return `Count + timer = ${this.count + this.timer}`;
    }
}

export default new Counter();
