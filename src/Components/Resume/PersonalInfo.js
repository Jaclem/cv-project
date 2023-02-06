export default function PersonalInfo(props) {
  return (
    <div className="personal--resume">
      <h3>Address</h3>
      <p>{props.address}</p>
      <h3>Email</h3>
      <p>{props.email}</p>
      <h3>Phone Number</h3>
      <p>{props.phone}</p>
    </div>
  );
}
