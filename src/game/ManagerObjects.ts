import * as THREE from "three"
import Scene from "./Scene";
import Player from "./Player";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const isDev = true;

export default class ManagerObjects {
    scene: Scene;
    player: Player;
    private gltfLoader: GLTFLoader | undefined;

    constructor(scene: Scene) {
        this.scene = scene
        this.player = new Player(scene);
        this.setGLTFLoader();
    }

    init() {
        if (isDev) {
            const grid = this.getGridHelper()
            this.scene.add(grid);
        }
        this.loadPlayer('static/models/spaceship/scene.glb');

    }

    setGLTFLoader() {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        this.gltfLoader = gltfLoader;
    }

    loadPlayer(path: string) {
        this.gltfLoader?.load(path, (gltf) => {
            gltf.scene.children.map((child) => {
                if (child.name === "group_space_ship") {
                    this.player.addObject(child);
                    this.player.setRotation();
                }
            })

            // scene.add(gltf.scene)
        })
    }

    getGridHelper() {
        const grid = new THREE.GridHelper(100, 100)
        return grid
    }
}