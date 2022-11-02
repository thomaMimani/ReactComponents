import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const[users, setUsers]=useState([

  ])

  function getUser(uName, uAge){
    setUsers((prevUser)=>{
      return[...prevUser,{username:uName, age:uAge}]
    })

    console.log(typeof uName,uAge)
  }

  return (
    <div>
      <AddUser addUser={getUser}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
