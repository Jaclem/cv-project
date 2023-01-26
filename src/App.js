import './App.css';
import Personal from './Components/Form/Personal';
import Header from './Components/Resume/Header';

function App() {
  return (
    <>
      <main className="card">
        <Personal />
      </main>

      <div className="resume-template">
        <Header />
      </div>
    </>

  );
}

export default App;
