import styles from './add-user.module.scss';
import classNames from 'classnames';
import { useState } from "react";

export interface AddUserProps {
    className?: string;
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "" });
  };

export const AddUser = ({ className }: AddUserProps) => {
    const [contactInfo, setContactInfo] = useState({
        nickname: "",
        password: "",
    });

    return (
        <div className={classNames(styles.root, className)}>
          <form onSubmit​={handleSubmit}>
            <h3>Add User</h3>
            <div>
              <input
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={contactInfo.nickname}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={contactInfo.password}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
    );
};
