import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar(){
    return(
        <div className='side-nav'>
            <div className="side-content">
            <Link to='/attendance'>Attendance </Link>
            <Link to='/timetable'>Timetable </Link>
            <Link to='/homework'>Homework </Link>
            <Link to='/assignment'>Assignment </Link>
            </div>
            

        </div>
    )
}
export default Sidebar;