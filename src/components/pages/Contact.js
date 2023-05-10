import React, { useState } from 'react';


// import './style.css';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'name') {
        return setName(value);
    } else if (name === 'email') {
        return setEmail(value);
    } else {
        setMessage(value);
    }
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // const { name, email, message } = e.target.elements;
    let details = {
      name,
      email,
      message
    }

    let response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    alert(result.status);
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact container'>
      <h1>Contact</h1>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className='formMessage'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
       Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;