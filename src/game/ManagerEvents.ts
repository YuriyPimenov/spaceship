import {SIZES} from "../utils/constants";
import PerspectiveCamera from "./PerspectiveCamera";
import Renderer from "./Renderer";

export default class ManagerEvents {
    private camera: PerspectiveCamera;
    private renderer: Renderer;
    private sizes: { width: number; height: number };

    constructor(camera: PerspectiveCamera, renderer: Renderer) {

        this.camera = camera
        this.renderer = renderer
        this.sizes = {width: SIZES.width, height: SIZES.height}

        this.handlerResize = this.handlerResize.bind(this);
    }

    init() {
        window.addEventListener('resize', this.handlerResize);
    }

    destroy() {
        window.removeEventListener('resize', this.handlerResize);
    }

    handlerResize() {
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;

        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()

        this.renderer.init({width: this.sizes.width, height: this.sizes.height})
    }
}