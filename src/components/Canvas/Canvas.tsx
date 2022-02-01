import React, {FC, useEffect, useRef} from 'react';
import styles from './canvas.module.scss'
import {observer} from "mobx-react-lite";
import canvasStore from "../../store/canvasStore";

const Canvas: FC = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            canvasStore.setCanvas(canvasRef.current);

            // Test
            const context = canvasStore.canvas?.getContext('2d');
            if (context) {
                context.beginPath();
                context.arc(50, 50, 50, 0, 2 * Math.PI);
                context.fill();
            }
        }
    }, [])

    return (
        <div className={styles.root}>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </div>
    );
});

export {Canvas};