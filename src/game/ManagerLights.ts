import {Scene} from "./index";
import {AmbientLight, DirectionalLight} from "three";


export default class ManagerLights {
    scene: Scene;
    ambientLight: AmbientLight | null;
    directionalLight: DirectionalLight | null;

    constructor(scene: Scene) {
        this.scene = scene
        this.ambientLight = this.getAmbientLight();
        this.directionalLight = this.getDirectionalLight();

        scene.add(this.ambientLight);
        scene.add(this.directionalLight);
    }

    getAmbientLight(): AmbientLight {
        return new AmbientLight(0xffffff, 0.8);
    }

    getDirectionalLight(): DirectionalLight {
        const directionalLight = new DirectionalLight(0xffffff, 0.6);
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.shadow.camera.far = 15
        directionalLight.shadow.camera.left = - 7
        directionalLight.shadow.camera.top = 7
        directionalLight.shadow.camera.right = 7
        directionalLight.shadow.camera.bottom = - 7
        directionalLight.position.set(5, 5, 5)

        return directionalLight;
    }

}