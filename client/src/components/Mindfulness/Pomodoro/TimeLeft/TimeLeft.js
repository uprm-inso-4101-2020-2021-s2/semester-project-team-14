import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import styles from './TimeLeft.module.css';
momentDurationFormatSetup(moment);
const TimeLeft = ({ audioElement, intervalId, setIntervalId, setCurrentSessionType, setSessionLength, setBreakLength, setTimeLeft, timerLabel, timeLeft, startStopButtonLabel, handleStartStopClick }) => {
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
    const handleResetButonClick = () => {
        audioElement.current.load();
        clearInterval(intervalId);
        setIntervalId(null);
        setCurrentSessionType('Session');
        setSessionLength(60 * 25);
        setBreakLength(60 * 5);
        setTimeLeft(60 * 25);
    };
    return (
        <div className={styles.container}>
            <p id='timer-label'>{timerLabel} Timer</p>
            <p id='time-left'>{formattedTimeLeft} min</p>
            <button onClick={handleStartStopClick}>{startStopButtonLabel}</button>
            <button className='reset' onClick={handleResetButonClick}>
                Reset
            </button>
        </div>
    );
};

export default TimeLeft;
