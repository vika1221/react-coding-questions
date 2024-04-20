import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateform = () => {
    let isValid = true;
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = " Email is invalid";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password should be greater than 6 char";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateform()) {
      const submittedData = {
        name,
        email,
        password,
      };
      setSubmittedData(submittedData);
      console.log(submittedData);
    }
  };
  return (
    <>
      <div>Please fill the form :)</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>You entered</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
}

export default Form;
