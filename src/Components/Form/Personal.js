import React, { useState } from "react";
import './Form.css';

function Personal() {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    about: ''
  });

  function handleChange(e) {

    setFormInput(prevInput => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <label htmlFor="firstName">First Name</label>
      <input 
        type="text"
        name="firstName"
        value={formInput.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input 
        type="text" 
        name="lastName" 
        value={formInput.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">email</label>
      <input 
        type="text" 
        name="email" 
        value={formInput.email}
        onChange={handleChange}
      />

      <label htmlFor="address">Address</label>
      <input 
        type="text" 
        name="address" 
        value={formInput.address}
        onChange={handleChange}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input 
        type="number" 
        name="phoneNumber" 
        value={formInput.phoneNumber}
        onChange={handleChange}
      />

      <label htmlFor="about">About</label>
      <textarea  
        name="about" 
        value={formInput.about}
        onChange={handleChange}
      />
    </div>
  )
}

export default Personal;