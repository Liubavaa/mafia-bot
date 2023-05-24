import styles from './game.module.scss';
import classNames from 'classnames';
import { LoginForm } from '../login-form/login-form';
import { useState } from "react";

export interface GameProps {
    className?: string;
}

export const Game = ({ className }: GameProps) => {
    const [playerNames, setPlayerNames] = useState(["", "", "", "", "", "", "", "", "", ""]);

    function shuffleList(list) {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        return list;
    }

    const roles = ["Sheriff", "Don", "Mafia", "Mafia", "Mafia", "Townie", 
                        "Townie", "Townie", "Townie", "Townie", "Townie"];
    const playerRoles = shuffleList(roles);

    const addName = (name: string, index: number) => {
        console.log(name);
        const updatedPlayerNames = [...playerNames]; // Create a copy of the array
        updatedPlayerNames[index-1] = name; // Modify the copy
        setPlayerNames(updatedPlayerNames); // Update the state variable
        console.log(updatedPlayerNames);
    }

    const RenderLoginForm = (playerNumber: number) => {
        const [showForm, setShowForm] = useState(true);
        const handleFormClose = () => {
            setShowForm(false);
        };
    
        playerNumber = 11-playerNumber;
        const playerRole = playerRoles[playerNumber];
        return (showForm && <LoginForm key={playerNumber} onClose={handleFormClose} playerNumber={playerNumber} playerRole={playerRole} addName={addName}/>);
    };

    const playerNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className={classNames(styles.root, className)}>
            {playerNumbers.map((playerNumber) => RenderLoginForm(playerNumber))}
        </div>
    );
};
