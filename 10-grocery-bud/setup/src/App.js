import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import E from "react-script";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery buddy</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='example, eggs'
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  );
}

export default App;
