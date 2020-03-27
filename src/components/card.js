import React,{Component} from 'react';
import '../styles/Card.css';
import Button from './buttons';
import {Redirect} from 'react-router-dom';
class Card extends Component{
    constructor(){
        super()
        this.state={
            "days":[...Array(31).keys()],
            student:{
                days:[]
            }
        }
    }
    componentDidMount(){
        let x=[] 
        for(let i=0; i<31; i++){
            if(i%2===0)
            x.push("p");
            else if(i%5===0){
                x.push("l");
            }
            else{
                x.push("a");
            }
        }
        this.setState({
            student:{
                ...this.state.student,
                days: x
            }
        })
    }
    
    render(){
        
        let selectedMonth =''
        let selectedName=''
        let selectedClass=''
        const setVal = () => {
            if(this.props.location.state){
                selectedMonth = this.props.location.state.selectedMonth;
                selectedName = this.props.location.state.selectedName;
                selectedClass = this.props.location.state.selectedClass;
                return true
            }else   return false
        }
        return(
            <div className='card1'>
                {setVal()?'':<Redirect to="/"/>}
                <div className='text'>
                    <div className='left'>
                    <h5 className="a" >Name: {selectedName}</h5>
                    <h5 className="c" >Attendance for month: {selectedMonth}</h5>
                    </div>
                    <div className="right">
                    <h5 className="b" >Class:{selectedClass}</h5>
                    </div>
                </div>
                <div className="button-group">
                {
                        this.state.student.days.map((day,index)=>{
                
                        return (

                    
                        
                        <Button data={index+1} present={day}/>
                        )

                        })
                    }

                </div>
                
                    
                </div>
            
        )

    }
}
export default Card;