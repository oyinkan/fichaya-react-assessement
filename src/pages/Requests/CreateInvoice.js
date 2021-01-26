import React, {useState} from 'react';
import './Requests.css';
import {FormContext, useFormContext} from './../FormContext';
import {useHistory} from 'react-router-dom';
import GenerateHeader from './../../components/GenerateHeader/GenerateHeader';
import Button from './../../components/Button/Button';

export default function CreateInvoice() {
    const [customerName, setCustomerName ] = useState('');
    const [emailAddress, setEmailAddress ] = useState('');
    const [phoneNumber, setPhoneNumber ] = useState('');
    const [homeAddress, setHomeAddress ] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [vat, setVat] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');
    const [serviceAmount, setServiceAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const history = useHistory();

    const {formState, setFormState} = useFormContext();

    const handleChange = (e, name) => {
        if (name === 'customerName') {
            setCustomerName(e.target.value);
        }
        if (name === 'emailAddress') {
            setEmailAddress(e.target.value);
        }
        if (name === 'phoneNumber') {
            setPhoneNumber(e.target.value);        
        }
        if (name === 'homeAddress') {
            setHomeAddress(e.target.value)
        }
        if (name === 'issueDate') {
            setIssueDate(e.target.value)
        }
        if (name === 'dueDate') {
            setDueDate(e.target.value)
        }
        if (name === 'invoiceNumber') {
            setInvoiceNumber(e.target.value)
        }
        if (name === 'vat') {
            setVat(e.target.value)
        }
        if (name === 'serviceDesc') {
            setServiceDesc(e.target.value)
        }
        if (name === 'serviceAmount') {
            setServiceAmount(e.target.value)
        }
        if (name === 'totalAmount') {
            setTotalAmount(e.target.value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setFormState({
            customerName,
            emailAddress,
            phoneNumber,
            homeAddress,
            issueDate,
            dueDate,
            invoiceNumber,
            vat,
            serviceDesc,
            serviceAmount,
            totalAmount
        });

        history.push('/requests/generate-invoice');
    }


    return(
        <React.Fragment>
            <main>
                <GenerateHeader title="Generate invoice" value="ENTER INVOICE INFO" />
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                        <div className="form-wrapper">
                            <div className="mb-4">
                                <label htmlFor="">Customer/ Company name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="customerName"
                                    value={customerName}
                                    onChange={(e) => handleChange(e, 'customerName')}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Email address</label>
                                        <input 
                                            type="email"
                                            className="form-control"
                                            name="emailAddress"
                                            value={emailAddress}
                                            onChange={(e) => handleChange(e, 'emailAddress')}
                                        />
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Phone number</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={(e) => handleChange(e, 'phoneNumber')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="">Home/ Building address</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="homeAddress"
                                    value={homeAddress}
                                    onChange={(e) => handleChange(e, 'homeAddress')}
                                />
                            </div>
                        </div>  
                        <div className="form-wrapper">
                            <div className="d-flex justify-content-between">
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Issue date</label>
                                        <input 
                                            type="date"
                                            className="form-control"
                                            name="issueDate"
                                            value={issueDate}
                                            onChange={(e) => handleChange(e, "issueDate")}
                                        />
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Due Date</label>
                                        <input 
                                            type="date"
                                            className="form-control"
                                            name="dueDate"
                                            value={dueDate}
                                            onChange={(e) => handleChange(e, "dueDate")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Invoice number</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="invoiceNumber"
                                            value={invoiceNumber}
                                            onChange={(e) => handleChange(e, "invoiceNumber")}
                                        />
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">V.A.T %</label>
                                        <select 
                                            className="form-control"
                                            name="vat" 
                                            value={vat} 
                                            onChange={(e) => handleChange(e, "vat")}
                                        >
                                            <option value="7.5">7.5%</option>
                                            <option value="5">5%</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="">Service description</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="serviceDesc"
                                    value={serviceDesc}
                                    onChange={(e) => handleChange(e, "serviceDesc")}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Service amount</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="serviceAmount"
                                            value={serviceAmount}
                                            onChange={(e) => handleChange(e, "serviceAmount")}
                                        />
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="mb-4">
                                        <label htmlFor="">Total amount</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="totalAmount"
                                            value={parseInt(serviceAmount) + parseInt((vat*serviceAmount)/100)}
                                            disabled
                                            onChange={(e) => handleChange(e, "totalAmount")}
                                        />
                                    </div>
                                </div>
                            </div>    
                        </div>  
                    </div> 
                    <div className="d-flex justify-content-end">
                        <div>
                            <Button className="btn-cancel" name="Cancel" />
                        </div>
                        <div>
                            <Button className="btn-create" name="Create Invoice" />
                        </div>
                    </div>
                </form>
            </main>
        
        </React.Fragment>
    );
}