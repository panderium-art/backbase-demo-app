import React from "react";
import styles from './Header.module.css'

const Header = ({logoUrl}) => {
    return (
        <>
            <header className={styles.header}>
                <img className={styles.header__image} src={logoUrl} alt="logo"/>
            </header>
        </>
    )
}

export default Header;
