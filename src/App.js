import React, {useState,Fragment} from 'react';

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
    <Fragment>
      <AddUser onAddUser={addUSerHandler}/>
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
