import {makeAutoObservable} from "mobx";
import {Scene, PerspectiveCamera, Renderer, Ticker, ManagerControls, ManagerLights} from "../game/";
import ManagerObjects from "../game/ManagerObjects";
import ManagerEvents from "../game/ManagerEvents";

class GameStore {
    isRun: boolean = false;
    scene: Scene | null = null;
    perspectiveCamera: PerspectiveCamera | null = null;
    renderer: Renderer | null = null;
    ticker: Ticker | null = null;
    managerControls: ManagerControls | null = null;
    managerLights: ManagerLights | null = null;
    managerObjects: ManagerObjects | null = null;
    managerEvents: ManagerEvents | null = null;

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

    setTicker(ticker: Ticker) {
        this.ticker = ticker;
    }

    setManagerObjects(managerObjects: ManagerObjects) {
        this.managerObjects = managerObjects;
    }

    setManagerControls(managerControls: ManagerControls) {
        this.managerControls = managerControls;
    }

    setManagerLights(managerLights: ManagerLights) {
        this.managerLights = managerLights;
    }

    setManagerEvents(managerEvents: ManagerEvents) {
        this.managerEvents = managerEvents;
    }
}

export default new GameStore();