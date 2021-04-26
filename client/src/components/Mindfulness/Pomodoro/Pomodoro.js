import React, { useState, useEffect, useRef } from 'react';
import styles from './Pomodoro.module.css';
import Break from './Break/Break';
import Session from './Session/Session';
import TimeLeft from './TimeLeft/TimeLeft';

const Pomodoro = () => {
    const audioElement = useRef(null);
    const [currentSessionType, setCurrentSessionType] = useState('Session');
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength <= 0) {
            setSessionLength(60);
        } else {
            setSessionLength(newSessionLength);
        }
    };
    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    };
    const [breakLength, setBreakLength] = useState(300);
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    };
    const isStarted = intervalId != null;
    const handleStartStopClick = () => {
        if (isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    }
                    audioElement.current.play();
                    if (currentSessionType === 'Session') {
                        setCurrentSessionType('Break');
                        setTimeLeft(breakLength);
                    } else if (currentSessionType === 'Break') {
                        setCurrentSessionType('Session');
                        setTimeLeft(sessionLength);
                    }
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <Break breakLength={breakLength} decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute} incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute} />
                <TimeLeft audioElement={audioElement} intervalId={intervalId} setIntervalId={setIntervalId} setCurrentSessionType={setCurrentSessionType} setSessionLength={setSessionLength} setBreakLength={setBreakLength} setTimeLeft={setTimeLeft} timerLabel={currentSessionType} startStopButtonLabel={isStarted ? 'Stop' : 'Start'} timeLeft={timeLeft} handleStartStopClick={handleStartStopClick} isStarted={isStarted} breakLength={breakLength} sessionLength={sessionLength} />
                <Session sessionLength={sessionLength} decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute} incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute} />
                <audio id='beep' ref={audioElement}>
                    <source src='https://onlineclock.net/audio/options/default.mp3' type='audio/mpeg' />
                </audio>
            </div>
        </>
    );
};

export default Pomodoro;
