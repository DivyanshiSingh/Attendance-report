import React, {Component} from 'react';
import {Link} from 'react-router-dom'

function Header(props){
    console.log(props)
    return (
        <div className='nav'>
            <div className='logo'><Link to="/">
            Attendance</Link></div>
            {props.isLoggedIn?
            (<div className='logout-btn' onClick={()=>{}}>Logout</div>):
            (<Link to="/Login"className='logout-btn' onClick={()=>{}}>Login</Link>)}
            
        </div>
    )

}
export default Header;

