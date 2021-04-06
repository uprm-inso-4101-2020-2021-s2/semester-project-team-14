import React from 'react';
import styles from './Mindfulness.module.css';
import { FaBrain, FaDumbbell } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';

const Mindfulness = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <p className={styles.text}> Meditation Exercises</p>
                <div className={styles.icon}>
                    <FaBrain />
                </div>
            </div>
            <div className={styles.iconContainer}>
                <p className={styles.text}> Pomodoro Timer</p>
                <div className={styles.icon}>
                    <MdTimer />
                </div>
            </div>

            <div className={styles.iconContainer}>
                <p className={styles.text}> Physical Exercises</p>
                <div className={styles.icon}>
                    <FaDumbbell />
                </div>
            </div>
        </div>
    );
};

export default Mindfulness;
