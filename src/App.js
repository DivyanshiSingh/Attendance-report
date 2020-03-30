import React from 'react';
import Card from './components/card';
import Routes from './routes';
import ProtectedRoutes from './ProtectedRoutes';
import Header from './components/Atoms/Header';
import './styles/App.css';
import Sidebar from './components/Atoms/Sidebar';
import {connect} from 'react-redux';
function App(props) {
  return (
    <div className={props.user.isLoggedIn?"App":'content-layout'}>
      
      <Header isLoggedIn={props.user.isLoggedIn}/>
      {props.user.isLoggedIn?<Sidebar/>: ''}

      <div className="main-content" >
      {props.user.isLoggedIn?ProtectedRoutes:Routes}
      
      </div>
      
    </div>
  );
}
const mapStateToProps = state => {
  return{
    user: state.userReducer
  }
}
export default connect(mapStateToProps,null)(App);
