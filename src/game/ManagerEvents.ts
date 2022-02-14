import {SIZES} from "../utils/constants";
import PerspectiveCamera from "./PerspectiveCamera";
import Renderer from "./Renderer";
import ManagerObjects from "./ManagerObjects";

export default class ManagerEvents {
    private camera: PerspectiveCamera;
    private renderer: Renderer;
    private managerObjects: ManagerObjects;
    private sizes: { width: number; height: number };

    constructor(camera: PerspectiveCamera, renderer: Renderer, managerObjects: ManagerObjects) {

        this.camera = camera
        this.renderer = renderer
        this.managerObjects = managerObjects
        this.sizes = {width: SIZES.width, height: SIZES.height}

        this.handlerResize = this.handlerResize.bind(this);
        this.handlerKeyDown = this.handlerKeyDown.bind(this);
        this.handlerKeyUp = this.handlerKeyUp.bind(this);
    }

    init() {
        window.addEventListener('resize', this.handlerResize);
        window.addEventListener('keydown', this.handlerKeyDown);
        window.addEventListener('keyup', this.handlerKeyUp);
    }

    destroy() {
        window.removeEventListener('resize', this.handlerResize);
        window.removeEventListener('keydown', this.handlerKeyDown);
        window.removeEventListener('keyup', this.handlerKeyUp);
    }

    handlerResize() {
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;

        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()

        this.renderer.init({width: this.sizes.width, height: this.sizes.height})
    }

    handlerKeyDown(event: KeyboardEvent) {
        if (event.key === 'a' || event.key === 'ArrowLeft') {
            this.managerObjects.player.setIsGoLeft(true);
        }

        if (event.key === 'd' || event.key === 'ArrowRight') {
            this.managerObjects.player.setIsGoRight(true);
        }

    }

    handlerKeyUp(event: KeyboardEvent) {
        if (event.key === 'a' || event.key === 'ArrowLeft') {
            this.managerObjects.player.setIsGoLeft(false);
        }

        if (event.key === 'd' || event.key === 'ArrowRight') {
            this.managerObjects.player.setIsGoRight(false);
        }

    }
}