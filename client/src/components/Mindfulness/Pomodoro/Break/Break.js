import React from 'react';
import moment from 'moment';
import styles from './Break.module.css';

const Break = ({ incrementBreakLengthByOneMinute, decrementBreakLengthByOneMinute, breakLength }) => {
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
    return (
        <div className={styles.container}>
            <p id='break-label'>Break</p>
            <p id='break-length'>{breakLengthInMinutes}</p>
            <button id='break-decrement' onClick={decrementBreakLengthByOneMinute}>
                -
            </button>
            <button id='break-increment' onClick={incrementBreakLengthByOneMinute}>
                +
            </button>
        </div>
    );
};

export default Break;
