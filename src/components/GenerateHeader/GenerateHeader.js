import React from 'react';
import './GenerateHeader.css';

export default function GenerateHeader(props) {
    return(
        <React.Fragment>
            <div>
                <p className="request">{props.title}</p>
                <p className="invoice">{props.value}</p>
            </div>
        </React.Fragment>
    );
}
