import React, { useState } from 'react';
import GlobalMenu from "../../components/GlobalMenu";
import Header from '../../components/Header';
import ContextMenu from '../../components/ContextMenu';
import MainContent from '../../components/MainContent';
import Ads from '../../components/Ads';
import Footer from '../../components/Footer';

import styles from "./home.module.css";

export default function Home() {
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

    const toggleContextMenu = () => {
        setIsContextMenuVisible(prevState => !prevState);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <Header />
            </div>

            <div className={styles.globalMenuContainer}>
                <button className={styles.menuButton} onClick={toggleContextMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <GlobalMenu />
            </div>

            {isContextMenuVisible && (
                <div className={styles.ContextMenuContainer}>
                    <ContextMenu />
                </div>
            )}

            <div className={styles.mainContextContainer}>
                <MainContent />
            </div>

            <div className={styles.adsContainer}>
                <Ads />
            </div>

            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    );
}
