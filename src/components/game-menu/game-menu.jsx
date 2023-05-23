import styles from './game-menu.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { AddUser } from '../add-user/add-user';

export interface GameMenuProps {
    className?: string;
}

export const GameMenu = ({ className }: GameMenuProps) => {
    const [showForm, setShowForm] = useState(false);

    const handleAddUserClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <h1>Bot that helps the presenter and saves the results</h1>
            <div className={styles.menu_buttons_div}>
                <button className={styles['menu-button']}>Start Game</button>
                <div>
                    <button className={styles['menu-button']} onClick={handleAddUserClick} >Create User</button>
                    {showForm && <AddUser onClose={handleFormClose} />}
                </div>
            </div>
        </div>
    );
};
