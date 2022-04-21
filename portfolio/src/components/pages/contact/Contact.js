import React from 'react';
import { useForm } from '@formspree/react';
import './contact.css'


function ContactForm() {
    const [state, handleSubmit] = useForm("mjvladld");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="contactForm " id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
            <fieldset id="fs-frm-inputs" className="formField m-auto">
                <h1>Send me an Email!</h1>
                    <div className="enterName contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="full-name">Full Name:</label>
                        <input className="nameInput" type="text" name="name" id="full-name" placeholder="First and Last" required="Please enter your name." ></input>
                    </div>
                    <div className="enterEmail contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="email-address">Email Address:</label>
                        <input className="emailInput" type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=" Please enter an email address." ></input>
                    </div>
                    <div className="enterMessage contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="message">Message:</label>
                        <textarea className="messageBox" rows="5" name="message" id="message" placeholder="Place your custom message here." required=" Please enter a message."></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    </div>
                    <div className="enterSubmit d-flex justify-content-center align-content-center">
                        <input className="submitBtn" type="submit" value="Submit"></input>
                    </div>
            </fieldset>
        </form >
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;