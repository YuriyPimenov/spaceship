import React, {FC, useEffect, useRef} from 'react';
import styles from './canvas.module.scss'
import {observer} from "mobx-react-lite";
import canvasStore from "../../store/canvasStore";
import gameStore from "../../store/gameStore";
import Scene from "../../game/Scene";
import {
    ManagerControls,
    ManagerEvents,
    ManagerLights,
    ManagerObjects,
    PerspectiveCamera,
    Renderer,
    Ticker
} from "../../game";
import {SIZES} from "../../utils/constants";

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

            gameStore.scene && gameStore.setManagerLights(new ManagerLights(gameStore.scene))

            gameStore.scene && gameStore.setManagerObjects(new ManagerObjects(gameStore.scene));
            gameStore.managerObjects?.init();

            gameStore.perspectiveCamera && gameStore.setManagerControls(new ManagerControls({camera: gameStore.perspectiveCamera, canvas: canvasRef.current}));
            gameStore.managerControls?.setOrbitControl({enableDamping: true, minDistance: 1,maxDistance: 10000, maxPolarAngle: Math.PI/2})

            gameStore.perspectiveCamera && gameStore.renderer && gameStore.managerObjects && gameStore.setManagerEvents(new ManagerEvents(gameStore.perspectiveCamera, gameStore.renderer, gameStore.managerObjects))
            gameStore.managerEvents?.init();

            if (gameStore.renderer && gameStore.scene && gameStore.perspectiveCamera && gameStore.managerControls && gameStore.managerObjects) {
                gameStore.setTicker(new Ticker(gameStore.renderer, gameStore.scene, gameStore.perspectiveCamera, gameStore.managerControls, gameStore.managerObjects));
                gameStore.ticker?.render();
            }

        }

        return () => {
            // ???????????????????? ?????????????????? ??????????????
            gameStore.managerEvents?.destroy();
        };
    }, [])

    return (
        <div className={styles.root}>
            <canvas ref={canvasRef} width={SIZES.width} height={SIZES.height}></canvas>
        </div>
    );
});

export {Canvas};