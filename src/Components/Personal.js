import Input from "./Inputs/Input";

function Personal() {
  return (
    <div className="personal-info">
      <h1>Personal Information</h1>
      <label htmlFor="firstName">First Name</label>
      <Input type="text" name="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName"></input>
    </div>
  )
}

export default Personal;