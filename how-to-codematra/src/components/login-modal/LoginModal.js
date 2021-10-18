import React, { useState } from 'react';
import './LoginModal.scss';

const LoginModal = props => { 

  // Initial values empty
  const { show , close } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hide / Show Errors
  const [showErrors, setShowErrors] = useState(false);

  // Error messages
  const [errorMsgs, setErrorMsgs] = useState([]);

  // Mail Sent
  const [mailSent, setMailSent] = useState(false);
   
  // Return null if false
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set Empty on Submit
    setErrorMsgs([]);
    setMailSent(false);

    // Flag to check if email is valid or not
    let isValidEmail = false;

    // Empty Email and Password Field
    if ( !email && !password) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Email and Password is a required field.']);
      setShowErrors(true);
      return false;
    }

    // If empty Email
    if (!email) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Email is a required field.']);
    } else {
      // Validate Email
      if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        setErrorMsgs(errorMsgs => [...errorMsgs, 'Invalid email address.']);
      } else {
        isValidEmail = true;
      }
    }

    // if empty password
    if (!password) {
      setErrorMsgs(errorMsgs => [...errorMsgs, 'Password is a required field.']);
      return false;
    }

    if (isValidEmail) {
      setShowErrors(false);

      // Use AXIOS code here
      // and use the following methods after success response.

      // Show Sent mail message after success
      setMailSent(true);

      // Clear Fields after success
      setEmail('');
      setPassword('')

      // Close Modal after success.
      setTimeout(close,1000);
    }

  }

  return (
    <>
      <div className="login-modal-ui">
        <form action="" method="post" onSubmit={handleSubmit} autoComplete="off">
          <h3 className="mdhead">Login</h3>  
          <span onClick={close} title="Close" className="close">&times;</span>
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
          <div className="mdbody">
              <div className="mdrow">
                <input 
                  type="email"
                  placeholder = "Enter your email."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="mdrow">
                <input 
                  type="password"
                  placeholder = "Enter your password."
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
          </div> 
          <div className="mdactions">
            <button type="submit" className="btnui">Login</button>
          </div> 
        </form>
      </div>
    </>
  );
}
export default LoginModal;