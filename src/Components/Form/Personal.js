import Description from "../Inputs/Description";
import './Form.css';

function Personal() {
  let fullName = [];

  function handleBlur(e) {
    fullName.push(e.target.value);
    console.log(fullName);

  }

  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <label htmlFor="firstName">First Name</label>
      <input 
        type="text"
        name="firstName"
        onBlur={handleBlur}
      />
      <label htmlFor="lastName">Last Name</label>
      <input 
        type="text" 
        name="lastName" 
      />

      <label htmlFor="email">email</label>
      <input 
        type="text" 
        name="email" 
      />

      <label htmlFor="address">Address</label>
      <input 
        type="text" 
        name="address" 
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input 
        type="number" 
        name="phoneNumber" 
      />

      <label htmlFor="about">About</label>
      <Description  
        name="about" 
      />
    </div>
  )
}

export default Personal;