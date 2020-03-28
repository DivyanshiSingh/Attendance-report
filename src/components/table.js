import React from 'react';
import { TableContainer, Paper, makeStyles, Table, TableHead, TableRow, TableCell, TableBody, Select, withStyles, MenuItem, Radio, Button, shadow} from '@material-ui/core';
import { connect } from 'react-redux';
import '../styles/table.css';
import { borderRadius } from '@material-ui/system';
const useStyles = makeStyles({
  table: {
    maxWidth: 800,
    // marginTop: 50,
    padding: 20
  },
  tableContainer: {
    marginTop: 50,
    maxWidth: 800,
    margin: '0 auto',
    textAlign: 'center',
    padding: '30',
    borderRadius: '10px',
    boxShadow: '2px 4px 5px 0 rgba(0,0,0,0,4)'
    
  }
});
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ModifiedSelect = withStyles({
  select: {
    width: "200px",
  }
})(Select);

function AttendanceTable (props) {
  const classes = useStyles();
  const getAt = (data,i) => {
    let x = props.student.find((item,index)=>{
      return item.name===data;
    });
    return x.days[i];
  }
  const TableComponent = props.selectedDate ? ( 
  <TableContainer component={Paper} className={classes.tableContainer}>   
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
      <TableRow>
        <StyledTableCell>S.NO</StyledTableCell>
        <StyledTableCell align="right">Name</StyledTableCell>
        <StyledTableCell align="right">Present</StyledTableCell>
        <StyledTableCell align="right">Absent</StyledTableCell>
        <StyledTableCell align="right">Leave</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        studentNames().map((item,index)=>(
          <TableRow>
            <TableCell component="th">
              {index+1}
            </TableCell>
            <TableCell align="right">
              {item}
            </TableCell>
            <TableCell align="right">
              {props.edit?<Radio
                checked={getAt(item,props.selectedDate-1)==='p'}
                value="p"
                color="primary"
                onChange={(event) => props.handleChange(item,index,event)}
              />: `${getAt(item,props.selectedDate-1)==='p'?getAt(item,props.selectedDate-1):''}`}
            </TableCell>
            <TableCell align="right">
            {props.edit?<Radio
                checked={getAt(item,props.selectedDate-1)==='a'}
                value="a"
                color="secondary"
                onChange={(event) => props.handleChange(item,index,event)}
              />: `${getAt(item,props.selectedDate-1)==='a'?getAt(item,props.selectedDate-1):''}`}
            </TableCell>
            <TableCell align="right">
            {props.edit?<Radio
                checked={getAt(item,props.selectedDate-1)==='l'}
                value="l"
                color="default"
                onChange={(event) => props.handleChange(item,index,event)}
              />: `${getAt(item,props.selectedDate-1)==='l'?getAt(item,props.selectedDate-1):''}`}
            </TableCell>
          </TableRow>
        ))
      }
      
    </TableBody>
  </Table>
  <div class='table-footer'>
    <p>Total Student Present: {props.count().P} </p>
    <p>Total Student Absent: {props.count().A} </p>
    <p>Total Students on Leave: {props.count().L} </p>
    {!props.edit ? <Button variant="contained" color="primary" onClick={props.handleEdit}>Edit</Button>: <Button variant="contained" color="secondary" onClick={props.handleSave}>Save</Button>}
    {/* <Button variant="contained"color="primary" onClick={props.handleEdit}>{props.edit?'Save':'Edit'}</Button> */}
    </div>
    </TableContainer>) : null

  

  function studentNames(){
    let y = props.userReducer.classData.find((item,index) => {
      return (item.class === props.selectedClass)
    });
    return y.names;
  }
  function teacher(){
   let x = props.userReducer.classData.find((item, index) => {
      return (item.class===props.selectedClass) 
      
    })
    console.log(x);
    return x.classTeacher;
  }
    return(
      <React.Fragment>

      <div className="form">
        <div className="class">
        Class: <ModifiedSelect
              value={props.selectedClass}
              onChange={props.handleClassChange}
              
            >
              {
                props.userReducer.classData.map((data,index) => {
                  return <MenuItem value={data.class} key={index}>{data.class}</MenuItem>
                })
              }
            </ModifiedSelect>
            </div>
            <div className="classteacher" >
        ClassTeacher: {props.selectedClass?teacher():''}
        </div>
        {
        props.selectedClass ? 
        <div className="date-select">
          Date: <ModifiedSelect
              value={props.selectedDate}
              onChange={props.handleDateChange}
              
            >
              {
                props.userReducer.date.map((data,index) => {
                  return <MenuItem value={data+1} key={index}>{data+1}</MenuItem>
                })
              }
            </ModifiedSelect>
            
        </div>: null}
        
      </div>
        
        {props.selectedClass ? TableComponent : null}   
      </React.Fragment>
    );
}
const mapStateToProps = state => {
  return {
    userReducer: state.userReducer,
  }
}
export default connect(mapStateToProps, null)(AttendanceTable);