import React, {FC, useEffect, useRef} from 'react';
import styles from './canvas.module.scss'
import {observer} from "mobx-react-lite";
import canvasStore from "../../store/canvasStore";
import gameStore from "../../store/gameStore";
import Scene from "../../game/Scene";
import {PerspectiveCamera, Renderer} from "../../game";

const Canvas: FC = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            canvasStore.setCanvas(canvasRef.current);

            gameStore.setScene(new Scene());
            gameStore.scene?.init();

            gameStore.setPerspectiveCamera(new PerspectiveCamera());
            gameStore.perspectiveCamera?.init();

            gameStore.setRenderer(new Renderer({canvas: canvasRef.current}));
            gameStore.renderer?.init();

            gameStore.perspectiveCamera && gameStore.scene?.add(gameStore.perspectiveCamera);

            gameStore.scene &&
            gameStore.perspectiveCamera &&
            gameStore.renderer?.render(gameStore.scene, gameStore.perspectiveCamera);
        }
    }, [])

    return (
        <div className={styles.root}>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </div>
    );
});

export {Canvas};