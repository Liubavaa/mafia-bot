import styles from './home-main.module.scss';
import classNames from 'classnames';
import { MafiaImage } from '../mafia-image/mafia-image';
import { GameMenu } from '../game-menu/game-menu';

export interface HomeMainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeMain = ({ className }: HomeMainProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <MafiaImage />
            <GameMenu />
        </div>
    );
};
