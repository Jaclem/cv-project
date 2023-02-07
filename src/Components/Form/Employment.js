import { useState } from "react";

export default function Employment(props) {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(false);

  function handleDelete() {
    setDeleteBtn((prevBtn) => !prevBtn);
  }

  function handleAdd() {
    setAddBtn((prevAddBtn) => !prevAddBtn);
    setDeleteBtn((prevBtn) => {
      if (!prevBtn) {
        return !prevBtn;
      }
    });
  }

  return (
    <>
      {!deleteBtn && (
        <>
          <h1 className="personal--title">Experience</h1>
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

          <button className="personal--delete" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
      <button className="personal--add" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
