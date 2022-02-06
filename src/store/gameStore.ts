import {makeAutoObservable} from "mobx";
import {Scene, PerspectiveCamera, Renderer, Ticker, Player, ManagerControls, ManagerLights} from "../game/";

class GameStore {
    isRun: boolean = false;
    scene: Scene | null = null;
    perspectiveCamera: PerspectiveCamera | null = null;
    renderer: Renderer | null = null;
    ticker: Ticker | null = null;
    player: Player | null = null;
    managerControls: ManagerControls | null = null;
    managerLights: ManagerLights | null = null;

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

    setPlayer(player: Player) {
        this.player = player;
    }

    setManagerControls(managerControls: ManagerControls) {
        this.managerControls = managerControls;
    }

    setManagerLights(managerLights: ManagerLights) {
        this.managerLights = managerLights;
    }
}

export default new GameStore();