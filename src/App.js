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
    title: "",
    email: "",
    address: "",
    phoneNumber: "",
    about: "",
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
          title={formInput.title}
        />
        <main className="main">
          <Aside />
          <PersonalInfo />
        </main>
      </section>
    </>
  );
}

export default App;
