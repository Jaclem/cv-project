import "./App.css";
import Personal from "./Components/Form/Personal";
import Header from "./Components/Resume/Header";
import Aside from "./Components/Resume/Aside";
import PersonalInfo from "./Components/Resume/PersonalInfo";
import { useState } from "react";
import Employment from "./Components/Form/Employment";
import Delete from "./Components/Buttons/Delete";
import Add from "./Components/Buttons/Add";

function App() {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(false);

  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [employList, setEmployList] = useState([])
  const obj =  {
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleEmployListChange(e, index) {
    const {name, value} = e.target
    setEmployList(prev => {
      const found = prev[index]
      found[name] = value
      return [...prev]
    })
  }

  function handleDelete() {
    setDeleteBtn((prevBtn) => !prevBtn);
  }

  function handleAdd() {
    setAddBtn((prevAddBtn) => !prevAddBtn);
    setDeleteBtn(false);
    setEmployList((prevEmployList) => {
          return [...prevEmployList, {...obj}]
    })
  }
  const employment = employList.map((list, i) => {
    return <Employment key={i} handleChange={(e) => handleEmployListChange(e,i)} input={list} />
  });

  const asideList = employList.map((list, i) => {
    return (
      <Aside
        key={i}
        index={i}
        position={list.position}
        company={list.company}
        city={list.city}
        from={list.startDate}
        to={list.endDate}
    />
    )         
  })

  return (
    <>
      <div className="card">
        <Personal handleChange={handleChange} input={formInput} />
   
        {employment}

        <Delete deleteBtn={handleDelete} />

        <Add addBtn={handleAdd} />
      </div>

      <section className="resume-template">
        <Header
          firstName={formInput.firstName}
          lastName={formInput.lastName}
          occupation={formInput.occupation}
        />
        <main className="main">
          {asideList}

          <PersonalInfo
            address={formInput.address}
            phone={formInput.phoneNumber}
            email={formInput.email}
          />
        </main>
      </section>
    </>
  );
}

export default App;
