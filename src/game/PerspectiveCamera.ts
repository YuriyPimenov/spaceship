import * as THREE from "three";
import {SIZES} from "../utils/constants";

export default class PerspectiveCamera extends THREE.PerspectiveCamera{
    constructor({fov, aspect, near, far} = {
        fov : 75,
        aspect : SIZES.width / SIZES.height,
        near : 0.1,
        far : 10000
    }) {
        super(fov, aspect, near, far)
    }

    init() {
        this.setPosition({x: 0, y: 10, z: 10})
        this.setLookAt({x: 0, y: 0, z: 0})
    }

    setPosition(vector: { x: number; y: number; z: number }) {
        this.position.set(vector.x, vector.y, vector.z)
    }

    setLookAt(vector: { x: number; y: number; z: number }) {
        this.lookAt(vector.x, vector.y, vector.z)
    }
}