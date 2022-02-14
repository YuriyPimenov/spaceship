import {Scene} from "./index";
import {MathUtils, Object3D} from "three";

export default class Player {
    scene: Scene;
    private mesh: Object3D | undefined;
    private isGoLeft: boolean = false;
    private isGoRight: boolean = false;
    private SPEED: number = 20;


    constructor(scene: Scene) {
        this.scene = scene

    }

    addObject(object: Object3D) {
        this.mesh = object;
        this.scene.add(object);
    }

    setIsGoLeft(isGoLeft: boolean) {
        this.isGoLeft = isGoLeft;
    }

    setIsGoRight(isGoRight: boolean) {
        this.isGoRight = isGoRight;
    }

    // TODO refactor
    setRotation() {
        if (this.mesh) {
            this.mesh.rotation.x = MathUtils.degToRad(-90);
            this.mesh.position.z = 5;
        }
    }

    update(delta: number) {
        if (this.isGoLeft && this.mesh) {
            this.mesh.position.x -= this.SPEED * delta;

            // this.mesh.position.x -= Math.sin(delta) * this.SPEED;
            // this.mesh.position.y += Math.abs(Math.sin(delta)) * this.SPEED;

        }

        if (this.isGoRight && this.mesh) {
            this.mesh.position.x += this.SPEED * delta;

            // this.mesh.position.x += Math.sin(delta) * this.SPEED;
            // this.mesh.position.y += Math.abs(Math.sin(delta)) * this.SPEED;
        }
    }
}