import styles from './header.module.scss';
import classNames from 'classnames';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h3>Mafia bot</h3>
            <nav className={styles.nav}>
                <a>Home</a>
                <a>Leaderboard</a>
            </nav>
        </div>
    );
};
