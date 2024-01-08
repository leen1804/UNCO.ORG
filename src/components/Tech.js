import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

.contact-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #f4f4f4;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .form-group label {
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .form-group input {
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .phone-input {
    margin-left: 10px;
  }
  
  .message-input {
    resize: vertical;
  }
  
  .submit-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  `;

const ContactForm = () => {
  return (
    <Wrapper>
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <div className="form-group">
        <label htmlFor="device">Device:</label>
        <input type="text" id="device" name="device" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" className="message-input" required></textarea>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </section>
    </Wrapper>
  );
};

export default ContactForm;