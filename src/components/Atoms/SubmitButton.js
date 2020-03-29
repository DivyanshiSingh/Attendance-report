import React from 'react';
 
import { Button } from '@material-ui/core';

export default function SubmitButton(props){
    return (
        <Button variant="contained" onClick={props.onClick} color="primary">
            {props.text}
        </Button>
    )

}