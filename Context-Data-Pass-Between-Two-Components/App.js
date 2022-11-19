import * as React from 'react';
import { createContext, useContext, useState } from "react";
 
const UserContext = createContext();
 
/*
For individual files
1. Create a file named userContext.js and pase the bellow codes
 
import { createContext } from "react";
export const userContext = createContext({});
 
2. Import on your individual files:
import { userContext } from "./userContext.js";
 
*/
 
export default function App() {
 const [user, setUser] = useState({
   whoClick: 'No one'
 });
 
 return (
   <div className="App">
     <h2>Hello I'm APP</h2>
     <h4>Who clicked : {user.whoClick}</h4>
 
     <button onClick={
       ()=>setUser({
         whoClick: 'App'
       })
     }>
       Update User
     </button>
     
     <UserContext.Provider value={{user, setUser}} >
       <Child/>
     </UserContext.Provider>
   </div>
 );
}
 
 
export function Child() {
 const {user, setUser} = useContext(UserContext);
 
 return (
   <div className="App">
     <br/><br/><br/><br/>
     <h2>Hello I'm Child</h2>
     <h4>Who clicked : {user.whoClick}</h4>
 
     <button onClick={
       ()=>setUser({
         whoClick: 'Child'
       })
     }>
       Update User
     </button>
   </div>
 );
}
