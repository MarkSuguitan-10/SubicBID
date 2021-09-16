import React from 'react';
import Logo from './../../Resource/SBMA.png';
import './CreateAccount.css';

const CreateAccount = () => {
    return (
        <div className="newaccount-page">
            <header>
                <img src={Logo} alt="SBMA Logo"/>
                <h4>Subic Bay Freeport Business Registration System</h4>
            </header>
            <div className="newaccountinput-container">
                <section className="createaccount-container">
                    <h3>Create Account</h3>
                    <form>
                        <div className="data-input">
                            <div className="input-container">
                                <label htmlFor='Name of Applicant'>Name of Applicant: <span>*</span></label>
                                <input
                                type='text'
                                name='nameofapplicant'
                                id='nameofapplicant'
                                />
                            </div>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                                <label htmlFor='Company Name'>Company Name: <span>*</span></label>
                                <input
                                type='text'
                                name='companyname'
                                id='companyname'
                                placeholder="Proposed Name of SBF Enterprise"
                                />
                            </div>
                            <label className="errorlabel">That company is already a registered SBF Enterprise</label>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                                <label htmlFor='Email Address'>Email Address: <span>*</span></label>
                                <input
                                type='email'
                                name='Email Address'
                                id='email'
                                placeholder="Email"
                                />
                            </div>
                            <label className="errorlabel">That email address is taken. Try another</label>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                                <label htmlFor='telephone'>Telephone No: <span>*</span></label>
                                <input
                                type='telephone'
                                name='telephone'
                                id='telephone'
                                />
                            </div>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                                <label htmlFor='mobileno'>Mobile No: <span>*</span></label>
                                <input
                                type='mobileno'
                                name='mobileno'
                                id='mobileno'
                                />
                            </div>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                            <label htmlFor='password'>Password : <span>*</span></label>
                            <input
                            type='password'
                            name='password'
                            id='password'
                            />
                            </div>
                        </div>
                        <div className="data-input">
                            <div className="input-container">
                            <label htmlFor='confirmpassword'>Confirm Password : <span>*</span></label>
                            <input
                            type='confirmpassword'
                            name='confirmpassword'
                            id='confirmpassword'
                            />
                            </div>
                        </div>
                        <div className="control-container">
                            <button className="btn-link">I already have an account</button>
                            <button className="btn">Sign Up</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default CreateAccount
