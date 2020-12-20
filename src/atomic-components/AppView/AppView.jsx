import React from 'react';
import './AppView.styles.css'

const AppView = (props) => {
    return (
            <main className="container">
                {props.children}
            </main>
    )
}

export default AppView;
