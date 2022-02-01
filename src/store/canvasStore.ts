import {makeAutoObservable} from "mobx";

class CanvasStore {
    canvas: HTMLCanvasElement | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

}

export default new CanvasStore();