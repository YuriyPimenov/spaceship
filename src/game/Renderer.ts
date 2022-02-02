import * as THREE from "three";

export default class Renderer extends THREE.WebGLRenderer {
    constructor(params: {canvas: HTMLCanvasElement}) {
        super({canvas: params.canvas})
    }

    init({width, height} = {width: window.innerWidth, height: window.innerHeight}) {
        this.setSizeRenderer({width, height})
        this.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    setSizeRenderer(size: {width: number, height: number}) {
        this.setSize(size.width, size.height)

    }
}