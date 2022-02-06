import {Scene, PerspectiveCamera, Renderer, ManagerControls} from "../game/";

export default class Ticker{
    scene: Scene;
    perspectiveCamera: PerspectiveCamera;
    renderer: Renderer;
    managerControls: ManagerControls;

    constructor(renderer: Renderer, scene: Scene, perspectiveCamera: PerspectiveCamera, managerControls: ManagerControls) {
        this.renderer = renderer;
        this.scene = scene;
        this.perspectiveCamera = perspectiveCamera;
        this.managerControls = managerControls;

        this.tick = this.tick.bind(this)
    }

    render() {
        this.tick()
    }

    tick() {
        this.managerControls.getControl()?.update()

        this.renderer.render(this.scene, this.perspectiveCamera);

        window.requestAnimationFrame(this.tick)
    }

}