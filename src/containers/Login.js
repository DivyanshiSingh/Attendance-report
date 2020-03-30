import React, {Component} from 'react';
import InputBox from '../components/Atoms/InputBox';
import SubmitButton from '../components/Atoms/SubmitButton';
import '../styles/Login.css';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import RadioButton from '../components/Atoms/RadioButton';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import userActions from '../actions/userActions';
import img2 from '../images/img2.svg';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: '',
            error: false,
            logintype: ''
        }

    }
    onNameChange=(event)=>{
       this.setState({
           username:event.target.value
       })
    }
    onPasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleSubmit=(event)=>{
        console.log(event);
        if(this.state.username==='' || this.state.password==='')
        this.setState({
            error:true
        })
        if(this.state.logintype==='')
        alert('Are you a student or teacher')
        else{
            let payload={
                username: this.state.username,
                password: this.state.password,
                type:this.state.logintype,
            };
            this.props.loginAction.loginUser(payload);
            this.props.history.push('/dashboard')
        }

    }
    onChange=(event)=>{
        this.setState({
            logintype:event.target.value
        })
        console.log(event.target.value);
    }
    componentDidUpdate(prevProps){
        if( !prevProps.user.isLoggedIn && this.props.user.isLoggedIn){
            this.props.history.push('/dashboard');
        }
    }
    render(){
        console.log(this.props);
        return(
            <div className="row">
            <div className="img">
                <img src={img2} />
                <h2>Welcome! Login to Continue!! </h2>
            </div>
            
            <div className="login-card">
                <div className="login-type">
                    <FaceRoundedIcon style={{fontSize:80}} color="primary"/>
                    <div className="type">
                    <div className="teacher">
                        Teacher: 
                        <RadioButton 
                        value='Teacher' 
                        onChange={this.onChange} 
                        checked={this.state.logintype==='Teacher'}/>
                        </div>
                    <div className="student">
                        student: 
                        <RadioButton 
                        value='Student' 
                        onChange={this.onChange} 
                        checked={this.state.logintype==='Student'}/>
                        </div>
                    </div>
                    
                </div>
            <div className="login-form">
            <InputBox 
                type="text" 
                label="Username" 
                helperText={this.state.error?'Username required':''} 
                value={this.state.username} error={this.state.error} 
                onChange={this.onNameChange}/>
            <InputBox 
                type="Password" 
                label="Password" 
                helperText={this.state.error?'Password required':''} 
                value={this.state.password} error={this.state.error} 
                onChange={this.onPasswordChange}/>
            <SubmitButton 
                text='Login' 
                onClick={this.handleSubmit} />

            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        user: state.userReducer,
    }
}
function mapDispatchToProps (dispatch){
    return {
        loginAction: bindActionCreators(userActions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);