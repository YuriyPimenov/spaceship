import {Scene} from "./index";
import {MathUtils, Object3D} from "three";

export default class Player {
    scene: Scene;
    private mesh: Object3D | undefined;

    constructor(scene: Scene) {
        this.scene = scene

    }

    addObject(object: Object3D) {
        this.mesh = object;
        this.scene.add(object);
    }

    setRotation() {
        if (this.mesh) {
            this.mesh.rotation.x = MathUtils.degToRad(-90);
            this.mesh.position.z = 5;
        }
    }
}