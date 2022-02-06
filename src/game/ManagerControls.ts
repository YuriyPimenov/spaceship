import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {PerspectiveCamera} from "./index";

export default class ManagerControls {
    camera: PerspectiveCamera;
    canvas: HTMLCanvasElement;
    currentControl: OrbitControls | null;

    constructor({camera, canvas}: {camera: PerspectiveCamera, canvas: HTMLCanvasElement}) {
        this.camera = camera
        this.canvas = canvas
        this.currentControl = null
    }


    getControl(): OrbitControls | null  {
        return this.currentControl
    }

    setOrbitControl({enableDamping, minDistance, maxDistance, maxPolarAngle}: {enableDamping: boolean, minDistance: number, maxDistance: number, maxPolarAngle: number}) {
        const control = new OrbitControls(this.camera, this.canvas)
        control.enableDamping = enableDamping
        control.minDistance = minDistance
        control.maxDistance = maxDistance
        control.maxPolarAngle = maxPolarAngle

        this.currentControl = control
    }

}