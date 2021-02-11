import React from 'react';
import styles from './SideBar.module.css';
import { BiCalendarAlt } from 'react-icons/bi';
import { MdViewList } from 'react-icons/md';
import { GiHumanPyramid } from 'react-icons/gi';
import { IoMdQuote } from 'react-icons/io';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <span>
        <p className={styles.iconsContainer}>
          <BiCalendarAlt className={styles.icon} /> Scheduler
        </p>
      </span>
      <span>
        <p className={styles.iconsContainer}>
          <MdViewList className={styles.icon} /> To Do List
        </p>
      </span>
      <span>
        <p className={styles.iconsContainer}>
          <GiHumanPyramid className={styles.icon} /> Mindfulness
        </p>
      </span>
      <span>
        <p className={styles.iconsContainer}>
          <IoMdQuote className={styles.icon} /> Motivational Quotes
        </p>
      </span>
    </div>
  );
};

export default SideBar;
