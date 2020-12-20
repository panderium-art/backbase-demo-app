import React from 'react';
import styles from './AppView.module.css'

const AppView = (props) => {
    return (
        <main className={styles.container}>
            {props.children}
        </main>
    )
}

export default AppView;
