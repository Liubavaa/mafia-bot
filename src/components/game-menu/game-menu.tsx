import styles from './game-menu.module.scss';
import classNames from 'classnames';

export interface GameMenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GameMenu = ({ className }: GameMenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Bot that helps the presenter and saves the results</h1>
            <div className={styles.menu_buttons_div}>
                <button className={styles['menu-button']}>Start Game</button>
                <button className={styles['menu-button']}>Create User</button>
            </div>
        </div>
    );
};
