import { useState } from "react";
import Container from "react-bootstrap/Container";
import CalculateTip from "./components/CalculateTip";
import DisplayTip from "./components/DisplayTip";
function App() {
  const [selectedPercentage, setSelectedPercentage] = useState(0);
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="/src/assets/logo.svg" alt="logo" />
        </div>
      </header>
      <section>
        <Container>
          <div className="sub-cont">
            <CalculateTip
              setBill={setBill}
              setSelectedPercentage={setSelectedPercentage}
              setPersons={setPersons}
              persons={persons}
              bill={bill}
            />
            <DisplayTip
              bill={bill}
              selectedPercentage={selectedPercentage}
              persons={persons}
              setBill={setBill}
              setPersons={setPersons}
              setSelectedPercentage={setSelectedPercentage}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
