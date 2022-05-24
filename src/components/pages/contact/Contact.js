import React from 'react';
import { useForm } from '@formspree/react';
import './contact.css'


function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_API_KEY);
    if (state.succeeded) {
        return <p className="success">Thanks for contacting me!</p>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="contactForm " id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
                <fieldset id="fs-frm-inputs" className="formField m-auto">
                    <div className="enterName contact-item d-flex justify-content-center align-content-center m-auto">
                        <label htmlFor="full-name">Full Name:</label>
                        <input className="nameInput" type="text" name="name" id="full-name" placeholder="First and Last" required="Please enter your name." ></input>
                    </div>
                    <div className="enterEmail contact-item d-flex justify-content-center align-content-center m-auto">
                        <label htmlFor="email-address">Email Address:</label>
                        <input className="emailInput" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=" Please enter an email address." ></input>
                    </div>
                    <div className="enterMessage contact-item d-flex justify-content-center align-content-center m-auto">
                        <label htmlFor="message">Message:</label>
                        <textarea className="messageBox" rows="5" name="message" id="message" placeholder="Place your custom message here." required=" Please enter a message."></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    </div>
                    <div className="enterSubmit d-flex justify-content-center align-content-center m-auto">
                        <input className="submitBtn" type="submit" value="Submit"></input>
                    </div>
                </fieldset>
            </form >
            <h2 className ='email'>jw.snyder159@gmail.com</h2>
        </div>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;