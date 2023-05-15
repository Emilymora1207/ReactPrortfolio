import React, { useState } from 'react';


// import './style.css';


function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  // const [isValid, setIsValid] = useState(false);
  const [disabler, setDisabler] = useState(true)


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }



  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    if (name === 'name') {
      if (value === '') {
        setErrorMessage('Name is required')
        setValidName(false);

      } else {
        setErrorMessage('')
        setValidName(true);

      }
        setName(value);
    } else if (name === 'email') {
      if (value === '') {
        setErrorMessage('Email is required')

      } else {
        setErrorMessage('')


      }
      if (!isValidEmail(value)) {
         setErrorMessage('Please use a valid email');
         setValidEmail(false);

        } else {
        setErrorMessage('');
        setValidEmail(true);


      }
        setEmail(value);
    } else {
      if (value === '') {
        setErrorMessage('Message is required')
        setValidMessage(false);
      } else {
        setErrorMessage('')
        setValidMessage(true);


      }
        setMessage(value);
    }
    if(validName&&validEmail&&validMessage) {
      setDisabler(false);
    } else {
      setDisabler(true);
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



  // const handlepageChange = event => {
  //   if (!isValidEmail(event.target.value)) {
  //     console.log('Email is invalid');
  //   } else {
  //     console.log(null);
  //   }

  return (
    <div className='section'>
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
        <p className='errMessage'>{errorMessage}</p>
        <button disabled={disabler ? true : false } type="button" onClick={handleFormSubmit}>
       Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Contact;