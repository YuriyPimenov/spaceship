import * as THREE from "three";

export default class Scene extends THREE.Scene{
    constructor() {
        super();
    }

    init(
        {color} = {color: '#0d006e'}
    ) {
        this.background = new THREE.Color(color)
    }
}