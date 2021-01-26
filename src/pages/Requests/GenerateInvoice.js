import React from 'react';
import './Requests.css';
import logo from './../../components/NavBar/logo.svg';
import {useFormContext} from './../FormContext';
import GenerateHeader from './../../components/GenerateHeader/GenerateHeader';
import Button from './../../components/Button/Button';


export default function GenerateInvoice() {
    const {formState} = useFormContext();
    
    return(
        <React.Fragment>
            <main>
                <GenerateHeader title="Generate invoice" value="PREVIEW YOUR INVOICE" />
                <div className="invoice-wrapper">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <img src={logo} alt={logo}/>
                        </div>
                        <div>
                            <p className="title">INVOICE</p>
                        </div>
                    </div>
                    <div className="d-flex wrap mb-4">
                        <div className="col-2">
                            <p className="title">From</p>
                            <p className="value mt-2" style={{lineHeight: '22px'}}>
                                <span>FICHAYA</span>
                                <br/>finance@fichaya.com 
                                <br/>+2348177141611
                            </p>
                        </div>
                        <div className="col-2 text-right">
                            <div className="mb-3">
                                <p className="title">Status</p>
                                <p className="value unpaid">UNPAID</p>
                            </div>
                            <div>
                                <p className="title">Created</p>
                                <p className="value">{formState.issueDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-4">
                        <div className="col-2">
                            <p className="title">Bill To</p>
                            <p className="value mt-2" style={{lineHeight: '25px'}}>
                                <span>{formState.customerName}</span>
                                <br/>{formState.emailAddress} 
                                <br/>{formState.homeAddress}
                                <br/>{formState.phoneNumber}
                            </p>
                        </div>
                        <div className="col-2 text-right">
                            <div className="mb-3">
                                <p className="title">Due</p>
                                <p className="value">{formState.dueDate}</p>
                            </div>
                            <div>
                                <p className="title">Amount</p>
                                <p className="value">{parseInt(formState.serviceAmount) + parseInt((formState.vat*formState.serviceAmount)/100)}</p>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <p className="title">Description</p>
                                    </th>
                                    <th>
                                        <p className="title">Qty</p>
                                    </th>
                                    <th>
                                        <p className="title">Unit Price</p>
                                    </th>
                                    <th>
                                        <p className="title">Amount</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="value">{formState.serviceDesc}</p>
                                    </td>
                                    <td>
                                        <p className="value">1</p>
                                    </td>
                                    <td>
                                        <p className="value">NGN {formState.serviceAmount}</p>
                                    </td>
                                    <td>
                                        <p className="value">NGN {formState.serviceAmount}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total-wrapper">
                        <div className="d-flex align-items-center justify-content-between border">
                            <div>
                                <p className="title">Sub-Total</p>
                            </div>
                            <div>
                                <p className="value">NGN {formState.serviceAmount}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <div>
                                <p className="title">VAT (7.5%)</p>
                            </div>
                            <div>
                                <p className="value">NGN {(formState.vat*formState.serviceAmount)/100}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <div>
                                <p className="title">Total</p>
                            </div>
                            <div>
                                <p className="value">NGN {parseInt(formState.serviceAmount) + parseInt((formState.vat*formState.serviceAmount)/100)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="d-flex" style={{marginLeft: '-20px', marginTop: '30px'}}>
                    <div>
                        <Button className="btn-cancel" name="Go Back" />
                    </div>
                    <div>
                        <Button className="btn-create" name="Send to Customer" />
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}