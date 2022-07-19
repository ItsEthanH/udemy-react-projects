import React from 'react';

import Card from '../ui/Card';
import styles from './UserList.module.css';

function UserList(props) {
  return (
    <Card className={props.users.length > 0 ? styles.users : styles.hidden}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
