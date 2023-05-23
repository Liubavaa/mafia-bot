import styles from './login-form.module.scss';
import classNames from 'classnames';
import React, { useState } from "react";

export interface LoginFormProps {
    className?: string;
    playerNumber: number;
    playerRole: string;
}

export const LoginForm = ({ className, onClose, playerNumber, playerRole }: LoginFormProps) => {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
    });

    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [nicknameError, setNicknameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [sheriffCard, setSheriffCard] = useState(false);


    const handleSubmit = (event) => {
      event.preventDefault();
      setNicknameError('');
      setPasswordError('');

      if (formData.nickname != "" && formData.nickname.length < 21 && formData.password.length < 21 && formData.password != "") {
        console.log(formData);
        setFormData({ nickname: "", password: ""});
        if (playerRole == "Sheriff"){
          setSheriffCard(true);
        }
        onClose();
      } if (formData.password.length == "" || formData.password.length > 20) {
        setPasswordError('Pssword must have a length between 1 and 20 characters.');
      } if (formData.nickname == "" || formData.nickname.length > 20) {
        setNicknameError('Name must have a length between 1 and 20 characters.');
      }
    };

    return (
        <div className={classNames(styles.root, className)}>
        {sheriffCard && (
          <div className="card">
            <h2 style={{ color: 'white' }}>Sheriff</h2>
          </div>
        )}
          {!sheriffCard && (
          <form onSubmit = {handleSubmit} className={styles['form']}>
              <h3>Player {playerNumber}</h3>  
            <div>
              <input
                onChange = {(e) => setFormData({...formData, nickname: e.target.value})}
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={formData.nickname}
              />
              {nicknameError && <div style={{ color: 'red' }}>{nicknameError}</div>}
            </div>
            <div>
              <input 
                onChange = {(e) => setFormData({...formData, password: e.target.value})}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
              />
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
            </div>
            <div>
              <button>Get Role</button>
            </div>
          </form>
          )}
        </div>
    );
};
