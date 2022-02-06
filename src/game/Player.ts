import {Scene} from "./index";
import {GridHelper} from "three";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export default class Player {

    constructor(scene: Scene) {
        const grid = this.getGridHelper()
        scene.add(grid)

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load('static/models/spaceship/scene.glb', (gltf) => {
            gltf.scene.children.map((child) => {
                if (child.name === "group_space_ship") {
                    scene.add(child)
                }
            })

            // scene.add(gltf.scene)
        })
    }

    getGridHelper() {
        const grid = new GridHelper(100, 100);

        return grid
    }
}