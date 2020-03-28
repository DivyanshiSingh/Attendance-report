import React from 'react';
import AttendanceTable from '../components/table';
import { connect } from 'react-redux';

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedClass:'',
      selectedDate:'',
      edit:false,
      attendance: [...Array(31).fill('a')],
      studentData:this.props.userReducer.studentData,
    }
  }
  handleClassChange = (event) => {
    this.setState({
      selectedClass: event.target.value,
    })
  }
  handleDateChange = (event) => {
    this.setState({
      selectedDate: event.target.value,
      attendance:[...Array(31).fill('a')]
    })
  }
  handleEdit = () => {
    let x = this.state.edit;

    this.setState({
      edit: !x,
    })
  }
  handleChange = (name,index,event) => {
    // let x = this.state.studentData.find((student,i)=>{
    //   return student.name===name
    // })
    let x = [...this.state.studentData];
    let newData = x.map((item,val) => {
      if(item.name===name){
        item.days[this.state.selectedDate-1] = event.target.value;
      }
      return item;
    })
    // x.days[this.state.selectedDate-1] = event.target.value;
    console.log(name,index,event);
    
    let y = [...this.state.attendance];
    y[index] = event.target.value;
    console.log(event.target.value);
    this.setState({
      attendance: y,
      studentData: newData
    })
    
  }
  handleSave = () => {
    this.setState({
      edit: false
    })
  }
  count = () => {
    let A=0,P=0,L=0;
    let x = this.props.userReducer.classData.find((c)=>{
      return c.class===this.state.selectedClass
    });
    let length = x.names.length;
    this.state.studentData.map((val,index)=>{
      console.log(val);
      
      if(val.class === this.state.selectedClass && val.days[this.state.selectedDate-1]==='a' )
        A++;
      else if(val.class === this.state.selectedClass && val.days[this.state.selectedDate-1]==='p')
        P++;
      else if(val.class === this.state.selectedClass && val.days[this.state.selectedDate-1]==='l')
        L++;
    })
    return {A,P,L};
  }
  render(){
    return(
      <AttendanceTable 
      selectedClass={this.state.selectedClass}
      handleClassChange={this.handleClassChange}
      selectedDate={this.state.selectedDate}
      handleDateChange={this.handleDateChange}
      edit={this.state.edit}
      handleEdit={this.handleEdit}
      attendance={this.state.attendance}
      student={this.state.studentData}
      handleChange={this.handleChange}
      count={this.count}
      handleSave={this.handleSave}
      />
    );
  }
  
}
const mapStateToProps = state => {
  return {
    userReducer: state.userReducer,
  }
}
export default connect(mapStateToProps, null)(Edit);