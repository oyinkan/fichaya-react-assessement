import React from 'react';
import {Link} from 'react-router-dom';
import GenerateHeader from '../../components/GenerateHeader/GenerateHeader';
import './Requests.css';

class DropDown extends React.Component {
    render() {
        return(
            <div className="dropdown">
                <ul>
                    <li><Link to="/">Contact customer</Link></li>
                    <li><Link to="/requests/create-invoice">Generate invoice</Link></li>
                    <li><Link to="/">Reject request</Link></li>
                </ul>
            </div>
        );
    }
}
export default class Requests extends React.Component {
    render(){
        return (
            <React.Fragment>
                <main>
                    <GenerateHeader title="Request Information" value="" />
                    <div className="request-wrapper">
                        <div className="d-flex">
                            <div className="details-wrapper">
                                <p className="title">Request Type</p>
                                <p className="value">Post-con</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">Customer Name</p>
                                <p className="value">Peter Abu-Ekpeshie</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">Cleaning Date</p>
                                <p className="value">09•10•2019</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">INVOICE STATUS</p>
                                <p className="value ungenerated">Ungenerated</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">REQUEST DATE</p>
                                <p className="value">06•10•2016</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">REQUEST TIME</p>
                                <p className="value">8:00 A.M</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">LOCATION</p>
                                <p className="value">8, YOvi Street, <br/>IWAYA, ONIKE, YABA.</p>
                            </div>
                            <div className="details-wrapper">
                                <p className="title">HOUSE-TYPE</p>
                                <p className="value">5-BEDROOM DUPLEX</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="action-wrapper">
                            <DropDown />
                            <button className="btn-action">Actions</button>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }            
}