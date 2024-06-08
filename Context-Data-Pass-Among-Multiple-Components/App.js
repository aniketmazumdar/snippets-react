import React, { useState, createContext, useContext } from 'react';
const UserContext = createContext();


export function GrandChild() {
  const {user, setUser} = useContext(UserContext);
  return (
    <div className='Child'>
        <h2>{user}</h2>
        <button onClick={() => setUser('')}>RESET</button>
    </div>
  );
}


export function Child() {
  return (
    <GrandChild />
  );
}


export function Parent() {
  return (
    <Parent />
  );
}


export function App() {
  const [user, setUser] = useState('Aniket');

  return (
    <div className='App'>
       <UserContext.Provider value={{user, setUser}}>
          <Child />
          <input onChange={(e) => setUser(e.target.value)} value={user} />
       </UserContext.Provider>
    </div>
  );
}