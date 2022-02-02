import React, {FC, useCallback} from 'react';
import styles from './menu.module.scss';
import gameStore from "../../store/gameStore";
import {observer} from "mobx-react-lite";

const Menu: FC = observer(() => {

    const onClickStart = useCallback(() => {
        gameStore.setRun(true);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.actions}>
                <div className={styles.start} onClick={onClickStart}>START</div>
            </div>
        </div>
    );
});

export {Menu};