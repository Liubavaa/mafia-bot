import styles from './mafia-image.module.scss';
import classNames from 'classnames';

export interface MafiaImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MafiaImage = ({ className }: MafiaImageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="../public/big_mafia.jpeg" className={styles.big_image} />
        </div>
    );
};
