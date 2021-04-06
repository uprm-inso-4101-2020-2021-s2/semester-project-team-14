import React, { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import landingPageImage from '../../assets/landigPageImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../actions/users';

const LandingPage = ({ setSelectedMenu, currentId }) => {
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });

    const user = useSelector((state) => state.users.find((p) => p._id === currentId));
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [user]);
    const clear = () => {
        setUserData({
            userName: '',
            password: '',
        });
    };
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedMenu('todolist');
    };
    const handleNewUser = (e) => {
        e.preventDefault();
        dispatch(createUser(userData));
        clear();
    };
    return (
        <div className={styles.container}>
            <h1>Stay Productive, Take Care of Your Time</h1>
            <p>Take action now, we can not afford time waste in such short span of lifetime</p>
            <div className={styles.formContainer}>
                <img src={landingPageImage} alt='iamge' />
                <form action=''>
                    <div className={styles.form}>
                        <p className={styles.formHeading}>Join and take action</p>
                        <hr />
                        {/* <p className={styles.title}>Login</p>
                        <div className={styles.input}>
                            <label>Email: </label>
                            <input type='text' />
                        </div>
                        <div className={styles.input}>
                            <label>Password: </label>
                            <input type='text' />
                        </div>
                        <button>Login</button> */}
                        <hr />
                        <p className={styles.title}>Sign up</p>
                        <div className={styles.input}>
                            <label>Email: </label>
                            <input
                                type='text'
                                value={userData.userName}
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        userName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Password: </label>
                            <input
                                type='text'
                                value={userData.password}
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <button onClick={handleNewUser}>Sign up</button>
                    </div>
                </form>
            </div>
            <button className={styles.button} onClick={handleClick}>
                home
            </button>
        </div>
    );
};
export default LandingPage;
