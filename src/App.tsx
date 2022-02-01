import React from 'react';
import {Menu, Canvas} from "./components/";
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.root}>
        <Menu />
        <Canvas />
    </div>
  );
}

export default App;
