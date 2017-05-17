import React from 'react';
import cross from './cross.svg';
import snowboarders from '../FourOhFour/snowboarders.svg';
import './EmailSignup.css';

const EmailSignup = () => {
  const EmailSignupTitle = () => (
    <div className="EmailSignupTitle-container">
      <div className="row no-gutters">
        <div className="col-12 col-md-auto">
          <div
            className="EmailSignupTitle-img"
          >
            <img
              alt="snowboarders"
              src={snowboarders}
            />
          </div>
        </div>
        <div className="col-12 col-md">
          <div className="EmailSignupTitle-content">
            <div
              style={{ fontSize: '28px', marginBottom: '0.5pc' }}
            >
              Want updates via email?
            </div>
            <div
              style={{ fontSize: '20px', fontWeight: '100' }}
            >
              We promise not to spam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EmailSignupForm = () => (
    <div className="EmailSignupForm-container">
      <input
        type="email"
        name="email"
        placeholder="email"
        className="EmailSignupForm-input"
      />

      <button
        name="submit"
        className="EmailSignupForm-submit"
      >
        Submit
      </button>
      <button
        name="cancle"
        className="EmailSignupForm-cross"
      >
        <img alt="cancel" src={cross} />
      </button>
    </div>
  );

  return (
    <div className="EmailSignup-wrapper">
      <div className="row no-gutters">
        <div className="col-12 col-lg-6">
          <EmailSignupTitle />
        </div>
        <div className="col-12 col-lg-6">
          <EmailSignupForm />
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
