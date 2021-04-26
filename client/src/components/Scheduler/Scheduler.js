import React from 'react';
import styles from './Scheduler.module.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const Scheduler = () => {
    return (
        <div className={styles.container}>
            <ScheduleComponent currentView='Month'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
};

export default Scheduler;
