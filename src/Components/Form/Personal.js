import "./Form.css";

function Personal(props) {
  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={props.input.firstName}
        onChange={props.handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={props.input.lastName}
        onChange={props.handleChange}
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={props.input.title}
        onChange={props.handleChange}
      />

      <label htmlFor="email">email</label>
      <input
        type="text"
        name="email"
        value={props.input.email}
        onChange={props.handleChange}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        value={props.input.address}
        onChange={props.handleChange}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="number"
        name="phoneNumber"
        value={props.input.phoneNumber}
        onChange={props.handleChange}
      />

      <label htmlFor="about">About</label>
      <textarea
        name="about"
        value={props.input.about}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Personal;
