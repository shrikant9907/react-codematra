import React, { useState } from 'react';
import './ContactForm.scss';

function ContactForm() { 

  // Initial values empty
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");

  // Hide / Show Errors
  const [showErrors, setShowErrors] = useState(false);

  // Error messages
  const [errorMsgs, setErrorMsgs] = useState([]);

  // Mail Sent
  const [mailSent, setMailSent] = useState(false);

  // Clear or Reset Form
  function clearForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set Empty on Submit
    setErrorMsgs([]);
    setMailSent(false);

    // Flag to check if email is valid or not
    let isValidEmail = false;

    if (!name) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Name is a required field.']);
    }

    if (!email) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Email is a required field.']);
    } else {
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setErrorMsgs(errorMsgs => [...errorMsgs, 'Invalid email address.']);
      } else {
        isValidEmail = true;
      }
    }

    if (!message) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Message is a required field.']);
    }

    if (!name || !email || !isValidEmail || !message) {
      setShowErrors(true);
      return false;
    } else {
      setShowErrors(false);

      // Use API here
      setMailSent(true);
      console.log(name, email, message);
      clearForm();
    }

  }

  return (
    <>
      <form className="cmcfui1" action="" onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
        <h3 className="cmhead">Contact Us</h3>  
        {
          showErrors ? errorMsgs.map((msg, index) => {
              return <div key={index} className="alertdanger">{msg}</div>;
          }) 
          : 
          ''
        }
        {
          mailSent ? <div className="alertsent">Mail sent successfully.</div> : ''
        }
        <div className="cmrow">
          <label>Name: <span className="danger">*</span></label>
          <input 
          name="name" 
          type="text" 
          value={name || ''} 
          onChange={e => setName(e.target.value)} 
          />
        </div> 
        <div className="cmrow">
          <label>Email: <span className="danger">*</span></label>
          <input 
          name="email" 
          type="text" 
          value={email || ''} 
          onChange={e => setEmail(e.target.value)} 
          />
        </div> 
        <div className="cmrow">
          <label>Message: <span className="danger">*</span></label>
          <textarea 
          name="message" 
          value={message || ''} 
          onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div> 
        <div className="cmrow actions">
          <button 
          className="btnui" 
          type="submit" 
          name="submit"
          >Submit</button>
        </div> 
      </form>
    </>
  );
}

export default ContactForm;
