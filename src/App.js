import React, {useState} from 'react';

import AddUser from './components/AddUser/AddUserInput';
import './App.css';
import UserList from './components/AddUser/UserList';

const App = () => {

  const [userList, setUserList] = useState([]);

  const addUSerHandler = (uname,uage) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name:uname, age:uage, id: Math.random().toString()}];
    })
  }
  
  return (
    <div>
      <AddUser onAddUser={addUSerHandler}/>
      <UserList users={userList} />
    </div>
  );
};

export default App;
