import * as THREE from "three";
import {SIZES} from "../utils/constants";

export default class Renderer extends THREE.WebGLRenderer {
    constructor(params: {canvas: HTMLCanvasElement}) {
        super({canvas: params.canvas})
    }

    init({width, height} = {width: SIZES.width, height: SIZES.height}) {
        this.setSizeRenderer({width, height})
        this.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.shadowMap.enabled = true
        this.shadowMap.type = THREE.PCFSoftShadowMap
    }

    setSizeRenderer(size: {width: number, height: number}) {
        this.setSize(size.width, size.height)

    }
}