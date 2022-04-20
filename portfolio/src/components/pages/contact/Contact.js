import React from 'react';
import { useForm } from '@formspree/react';
import './style.css'


function ContactForm() {
    const [state, handleSubmit] = useForm("mjvladld");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="contactForm " id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
            <fieldset id="fs-frm-inputs">
                <h1>Send me an Email!</h1>
                    <div className=" contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" name="name" id="full-name" placeholder="First and Last" required=""></input>
                    </div>
                    <div className="contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="email-address">Email Address:</label>
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""></input>
                    </div>
                    <div className="contact-item d-flex justify-content-center align-content-center m-2">
                        <label htmlFor="message">Message:</label>
                        <textarea rows="5" name="message" id="message" placeholder="Place your custom message here." required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    </div>
                    <div className="d-flex justify-content-center align-content-center">
                        <input type="submit" value="Submit"></input>
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