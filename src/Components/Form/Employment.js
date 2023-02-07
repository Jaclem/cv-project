export default function Employment(props) {
  return (
    <>
      <h1 className="personal--title">Experience</h1>
      {!props.delete && (
        <>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            value={props.input.position}
            onChange={props.handleChange}
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={props.input.company}
            onChange={props.handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={props.input.city}
            onChange={props.handleChange}
          />

          <label htmlFor="startDate">From</label>
          <input
            type="text"
            name="startDate"
            value={props.input.startDate}
            onChange={props.handleChange}
          />

          <label htmlFor="endDate">To</label>
          <input
            type="text"
            name="endDate"
            value={props.input.endDate}
            onChange={props.handleChange}
          />

          <button className="personal--delete" onClick={props.deleteBtn}>
            Delete
          </button>
        </>
      )}
      <button className="personal--add" onClick={props.handleAdd}>
        Add
      </button>
    </>
  );
}
