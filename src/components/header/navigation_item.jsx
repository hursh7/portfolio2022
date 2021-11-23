import React from 'react';
import styles from './navigation_item.module.css';

const NavigationItem = ({item}) => {
    return(
        <li className={styles.index}>{item}</li>    
    )};

export default NavigationItem;