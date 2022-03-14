import React, { useState } from "react";

import { validateEmail } from '../../utils/helpers';
import coverImage from '../../assets/cover/iMac.jpg';

function ContactForm() {
    const [formState, setFormState] =
        useState({ name: "", email: "", message: "" });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is incorrect.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    return (
        <section className="contact-form">
        
            <form id="contact-form" onSubmit={handleSubmit}>
            <h1>Contact me</h1>
                <div className="input-form">
                    <label htmlFor="name">Name:</label>
                    <input className="username" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="input-form">
                    <label htmlFor="email">Email:</label>
                    <input className="email" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="input-form">
                    <label htmlFor="message">Message:</label>
                    <textarea className="message" name="message" row="10" defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-outline-light">Submit</button>

            </form>
            <div>
                <img src={coverImage} className="cover-image" style={{ width: "80%" }} alt="cover" />
            </div>
        </section>

    )
}
export default ContactForm; 