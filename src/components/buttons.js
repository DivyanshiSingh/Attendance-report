import React, {Component} from 'react';
import '../styles/buttons.css';
class Button extends Component{
    constructor(props){
    super(props)

}
    render(){
        return(
            <div className={this.props.present==="p"?"present": (this.props.present==="a"?"absent":"box")}>
                {/* <div className="number"> */}
                <p className="para">{this.props.data}</p></div>
            // </div>
        )
    }
}
export default Button;