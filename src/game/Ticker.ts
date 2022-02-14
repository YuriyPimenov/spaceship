import {Scene, PerspectiveCamera, Renderer, ManagerControls, ManagerObjects} from "../game/";
// import * as THREE from 'three';
import {Clock} from "three";

export default class Ticker{
    scene: Scene;
    perspectiveCamera: PerspectiveCamera;
    renderer: Renderer;
    managerControls: ManagerControls;
    managerObjects: ManagerObjects;
    private clock: Clock;

    constructor(renderer: Renderer, scene: Scene, perspectiveCamera: PerspectiveCamera, managerControls: ManagerControls, managerObjects: ManagerObjects) {
        this.renderer = renderer;
        this.scene = scene;
        this.perspectiveCamera = perspectiveCamera;
        this.managerControls = managerControls;
        this.managerObjects = managerObjects;

        this.clock = new Clock();
        this.tick = this.tick.bind(this)
    }

    render() {
        this.tick()
    }

    tick() {
        const delta = this.clock.getDelta();

        this.managerControls.getControl()?.update()
        this.managerObjects.player.update(delta);

        this.renderer.render(this.scene, this.perspectiveCamera);

        window.requestAnimationFrame(this.tick)
    }

}