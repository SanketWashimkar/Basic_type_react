import React from 'react';
import './App.css';
import BaseComponent from './BaseComponent/BaseComponent';
import UserMangment from './UserMangment/UserMangment';

function App() {
  return (
   <div>
 
    {/* <BaseComponent title='Frontend Developer' name='Sanket Washimkar'  />  */}
    <UserMangment isLogin={false} />
    <UserMangment  isLogin={true}/>
   </div>
  );
}

export default App;
