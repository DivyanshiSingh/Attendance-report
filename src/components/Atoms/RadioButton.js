import React from 'react'
import { Radio } from '@material-ui/core';


export default function RadioButton(props){
    return(
        <Radio
            checked={props.checked}
            onChange={props.onChange}
            value={props.value}
            color={props.color}
        />
    )
}