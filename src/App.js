import "./App.css";
import Personal from "./Components/Form/Personal";
import Header from "./Components/Resume/Header";
import Aside from "./Components/Resume/Aside";
import PersonalInfo from "./Components/Resume/PersonalInfo";
import { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    address: "",
    phoneNumber: "",
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    setFormInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="card">
        <Personal handleChange={handleChange} input={formInput} />
      </div>

      <section className="resume-template">
        <Header
          firstName={formInput.firstName}
          lastName={formInput.lastName}
          occupation={formInput.occupation}
        />
        <main className="main">
          <Aside
            position={formInput.position}
            company={formInput.company}
            city={formInput.city}
            from={formInput.startDate}
            to={formInput.endDate}
          />

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
