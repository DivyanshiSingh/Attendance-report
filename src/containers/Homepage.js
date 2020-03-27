import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { MenuItem, withStyles } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import '../styles/home.css';
import './Home.css';
const ModifiedSelect = withStyles({
  select: {
    width: "200px",
  }
})(Select);
class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      class: [1,2,3,4,5,6,7,8,9,10,11,12],
      studentNames: [
        ["Shivam","Div","Manas"],
        ["Shivam","Div","Manas"],
        ["Shivam","Div","Manas"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div"],
        ["Shivam","Div","w"],
        ["Shivam","Div","z"],
    ],
    month:[
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
      selectedClass:'',
      selectedName:'',
      selectedMonth: '',
      redirect: false,
    }
  }
  handleClassChange = (event) => {
    this.setState({
      selectedClass: event.target.value
    })
  }
  handleNameChange = (event) => {
    this.setState({
      selectedName: event.target.value
    })
    
  }
  handleMonthChange = (event) => {
    this.setState({
      selectedMonth: event.target.value
    })
  }
  onSubmit = () => {
  this.setState({
    redirect: true,
  })
  }
  handleRedirect = () => {
    return <Redirect to={{
      pathname: "/admin/viewAttendanceByMonth",
      state: {
        selectedName: this.state.selectedName,
        selectedClass: this.state.selectedClass,
        selectedMonth: this.state.selectedMonth
      }
    }} />
  }
  render () {
    return (
      
      <div className="container">
        { this.state.redirect?this.handleRedirect():''}
        <Paper elevation={ 3 } className="paper">
          <h2 className="report">Attendance Report</h2>
          <div className="Form">

            <div className="class-select">
            <b>Classes :</b> 
            <ModifiedSelect
              value={this.state.selectedClass}
              onChange={this.handleClassChange}
            >
              {
                this.state.class.map((item,index) => {
                return <MenuItem value={item} key={index}>{item}</MenuItem>
                })
              }
            </ModifiedSelect>
            </div>

            <div className="name-select">
              <b>Name:</b> <ModifiedSelect
                value={this.state.selectedName}
                onChange={this.handleNameChange}
              >
                {
                  this.state.selectedClass? this.state.studentNames[this.state.selectedClass-1].map((name,index) => {
                  return <MenuItem value={name} key={index}>{name}</MenuItem>
                  }): null
                }
              </ModifiedSelect>
            </div>
            <div className="outer">
            <div className="month-select">
                <b>Month: </b>
                <ModifiedSelect value={this.state.selectedMonth} onChange={this.handleMonthChange}>
                  {
                    this.state.month.map((item, index) => {
                      return <MenuItem value={item} key={index}> {item} </MenuItem>
                    })
                  }
                </ModifiedSelect>
            </div>
            <div align="center" className="submit-button">
              <Button variant="contained" color="primary" onClick={this.onSubmit}>
                View Attendance
              </Button>
            </div>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}
export default Homepage;