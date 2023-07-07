import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("usersData");
    if (storedData) {
      setUsersData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }, [usersData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUsersData([...usersData, formData]);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleDeleteUser = (index) => {
    setUsersData(usersData.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setUsersData([]);
  };

  return (
    <div className="main">
        <div  className='cont'>
       
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-box"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input-box"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="input-box"
        />
        <button className="btn" type="submit">Submit</button>
      </form>
      <img src="image.png" alt="office" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleDeleteUser(index)} className="btnDel">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn2" onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default SignUp;
