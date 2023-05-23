import styles from './leader-board.module.scss';
import classNames from 'classnames';

export interface LeaderBoardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LeaderBoard = ({ className }: LeaderBoardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles["table"]}>
                <div className={styles["table-header"]}>
                    <div className={styles["header__item"]}><a id="name" className={styles["filter__link"]} href="#">Name</a></div>
                    <div className={styles["header__item"]}><a id="wins" className={styles["filter__link"]} href="#">Wins</a></div>
                    <div className={styles["header__item"]}><a id="draws" className={styles["filter__link"]} href="#">Draws</a></div>
                    <div className={styles["header__item"]}><a id="losses" className={styles["filter__link"]} href="#">Losses</a></div>
                    <div className={styles["header__item"]}><a id="total" className={styles["filter__link"]} href="#">Total</a></div>
                </div>
                <div className={styles["table-content"]}>	
                    <div className={styles["table-row"]}>		
                        <div className={styles["table-data"]}>Tom</div>
                        <div className={styles["table-data"]}>2</div>
                        <div className={styles["table-data"]}>0</div>
                        <div className={styles["table-data"]}>1</div>
                        <div className={styles["table-data"]}>5</div>
                    </div>
                    <div className={styles["table-row"]}>
                        <div className={styles["table-data"]}>Dick</div>
                        <div className={styles["table-data"]}>1</div>
                        <div className={styles["table-data"]}>1</div>
                        <div className={styles["table-data"]}>2</div>
                        <div className={styles["table-data"]}>3</div>
                    </div>
                </div>	
            </div>
        </div>
    );
};
