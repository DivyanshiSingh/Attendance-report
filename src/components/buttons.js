import React, {Component} from 'react';
import '../styles/buttons.css';
class Button extends Component{
    constructor(props){
    super(props)

}
    render(){
        return(
            <div className={this.props.present==="p"?"present box": (this.props.present==="a"?"absent box":"box")}>
                <div className="number">
                {this.props.data}</div>
            </div>
        )
    }
}
export default Button;