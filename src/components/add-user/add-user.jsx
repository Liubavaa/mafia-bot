import styles from './add-user.module.scss';
import classNames from 'classnames';
import React, { useState } from "react";

export interface AddUserProps {
    className?: string;
}

export const AddUser = ({ className, onClose }: AddUserProps) => {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
    });

    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [nicknameError, setNicknameError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleSubmit = (event) => {
      event.preventDefault();
      setNicknameError('');
      setPasswordError('');

      if (formData.nickname != "" && formData.nickname.length < 21 && formData.password.length < 21 && formData.password != "") {
        console.log(formData);
        setFormData({ nickname: "", password: ""});
        onClose();
      } if (formData.password.length == "" || formData.password.length > 20) {
        setPasswordError('Pssword must have a length between 1 and 20 characters.');
      } if (formData.nickname == "" || formData.nickname.length > 20) {
        setNicknameError('Name must have a length between 1 and 20 characters.');
      }
    };

    return (
        <div className={classNames(styles.root, className)}>
          <form onSubmit = {handleSubmit} className={styles['form']}>
            <div className={styles['exit_form']}>
              <h3>Add User</h3>
              <button onClick = {onClose} className={styles['exit_form_button']}>X</button>
            </div>  
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
              <button>Submit</button>
            </div>
          </form>
        </div>
    );
};
