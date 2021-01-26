import React from 'react';
import './Button.css';

export default function Button(props) {
    return(
        <React.Fragment>
            <button className={props.className}>{props.name}</button>
        </React.Fragment>
    );
}
