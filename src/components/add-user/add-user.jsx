import styles from './add-user.module.scss';
import classNames from 'classnames';
import React, { useState } from "react";

export interface AddUserProps {
    className?: string;
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ nickname: "", password: ""});
};

export const AddUser = ({ className }: AddUserProps) => {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
    });

    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={classNames(styles.root, className)}>
          <form onSubmit = {handleSubmit} className={styles['form']}>
            <h3>Add User</h3>
            <div>
              <input
                onChange = {(e) => setFormData({...formData, nickname: e.target.value})}
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={formData.nickname}
              />
            </div>
            <div>
              <input 
                onChange = {(e) => setFormData({...formData, password: e.target.value})}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
    );
};
