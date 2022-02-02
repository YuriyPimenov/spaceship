import React from 'react';
import {Menu, Canvas} from "./components/";
import styles from './app.module.scss'
import gameStore from "./store/gameStore";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
      <div className={styles.root}>
        {gameStore.isRun ? <Canvas /> : <Menu />}
      </div>
  );
})

export default App;
