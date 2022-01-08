import React, { useState } from "react";
// import { useNavigate } from 'react-router';
import { useHistory } from "react-router-dom";
import "../index.css";


// import {useNavigate} from 'react-router-dom';

const Project = () => {
  const history = useHistory();

  const [data, setData] = useState({
    title: "",
    objectives: "",
    scope: "",
    plan: "",
    deliverables: "",
    incentives: "",
    conditions: "",
  });

  // const navigate = useNavigate();
  
  let name, value;

  function handleInputs(e) {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {
      title,
      objectives,
      scope,
      plan,
      deliverables,
      incentives,
      conditions,
    } = data;

    const res = await fetch("/administrator", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        objectives,
        scope,
        plan,
        deliverables,
        incentives,
        conditions,
      }),
    });

    const resdata = res.json();

    if (res.status === 400 || !resdata) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Succesfull! ");
      console.log("Registration Succesfull!");

      history.push("/administrator");
      // navigate('/administrator');
    }
  };

  return (
  
    <div className="create">
      <h2>Enter Project Details</h2>

      <form method="POST">

        <label>Project Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />
        <label>Project Goal and Objectives:</label>
        <textarea
          required
          name="objectives"
          id="objectives"
          value={data.objectives}
          onChange={(e) => handleInputs(e)}
          className="inputField"
        />

        <label>Project Scope:</label>
        <input
          type="text"
          name="scope"
          id="scope"
          value={data.scope}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Plan</label>
        <textarea
          name="plan"
          id="plan"
          value={data.plan}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Deliverables: </label>
        <textarea
          name="deliverables"
          id="deliverables"
          value={data.deliverables}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project incentives: </label>
        <textarea
          name="incentives"
          id="incentives"
          value={data.incentives}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Terms and Conditions: </label>
        <textarea
          name="conditions"
          id="conditions"
          value={data.conditions}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <br />
        {/* <button 
          type="submit" 
          value="submit" 
          className="button-style"
        //   onClick={()=>{
        //     navigate('/submit');
        //   }}
        >Submit
        </button> */}
        <input
          type="submit"
          name="submit"
          id="submitBtn"
          value="SUBMIT"
          onClick={PostData}
        ></input>
      </form>
    </div>

  );
};

export default Project;
