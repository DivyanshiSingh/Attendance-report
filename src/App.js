import React from 'react';
import Card from './components/card';
import Routes from './routes';
import Header from './components/Atoms/Header';
import './styles/App.css';
import Sidebar from './components/Atoms/Sidebar';

function App(props) {
  return (
    <div className={props.isLoggedIn?"App":'content-layout'}>
      
      <Header/>
      {props.isLoggedIn?<Sidebar/>: ''}
      <div className="main-content">{Routes}</div>
      
    </div>
  );
}

export default App;
