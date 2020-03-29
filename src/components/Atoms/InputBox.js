import React from 'react';
import {TextField} from '@material-ui/core';

export default function InputBox(props){
    return(
        <TextField
        label={props.label}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        error={props.error && (props.value==='')}
        helperText={(props.value===''?props.helperText:'')}
        variant="outlined"/>
    )
    
}