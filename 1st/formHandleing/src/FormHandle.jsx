import React, { useState } from "react";

function FormHandle() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    isSubscribed: false,
    role: "",
  });

  const handleChgange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName"> UserName </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChgange}
        />
      </div>
      <div>
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChgange}
        />
      </div>
      <div>
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChgange}
        />
      </div>
      <div>
        <label htmlFor="isSubscribed"> Subscribe</label>
        <input
          type="checkbox"
          id="isSubscribed"
          name="isSubscribed"
          value={formData.isSubscribed}
          onChange={handleChgange}
        />
      </div>
      <div>
        <label htmlFor="role"> Role </label>
        <select>
          id="role" name="role" value={formData.role}
          onChange={handleChgange}
          <option value="">Select Role</option>
          <option value="">Admin</option>
          <option value="">User</option>
          <option value="">Guest</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default FormHandle;
