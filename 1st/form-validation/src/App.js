import "./App.css";
import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobno, setMobno] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit=(e) =>{
    //e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (fname.length === 0) {
      alert("Enter valid first name");
      return;
    }
    if (lname.length === 0) {
      alert("Enter valid last name");
      return;
    }
    if (mobno.length < 10 || mobno.length > 10) {
      alert("Enter valid Mobile no. Please exclude +91");
      return;
    }
    if (!email.match(emailRegex)) {
      alert("Enter valid Email");
      return;
    }
  }
  return (
    <div className="App">
      <label>First Name :- </label>
      <input
        className="fname"
        type="text"
        placeholder="Enter the first-name"
        onChange={(e) => {
          setFname(e.target.value);
        }}
      ></input>

      <label>last-name :- </label>
      <input
        className="lname"
        type="text"
        placeholder="Enter the last-name"
        onChange={(e) => {
          setLname(e.target.value);
        }}
      ></input>

      <label>Mobile no :- </label>
      <input
        className="mobno"
        type="text"
        placeholder="Enter the Mobile no"
        onChange={(e) => {
          setMobno(e.target.value);
        }}
      ></input>

      <label>Email :- </label>
      <input
        className="email"
        type="text"
        placeholder="Enter the Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

export default App;
