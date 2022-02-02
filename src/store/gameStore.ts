import {makeAutoObservable} from "mobx";
import {Scene, PerspectiveCamera, Renderer} from "../game/";

class GameStore {
    isRun: boolean = false;
    scene: Scene | null = null;
    perspectiveCamera: PerspectiveCamera | null = null;
    renderer: Renderer | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setRun(isRun: boolean) {
        this.isRun = isRun;
    }

    setScene(scene: Scene) {
        this.scene = scene;
    }

    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera) {
        this.perspectiveCamera = perspectiveCamera;
    }

    setRenderer(renderer: Renderer) {
        this.renderer = renderer;
    }
}

export default new GameStore();