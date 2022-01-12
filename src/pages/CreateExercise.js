import "../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateExercise() {
  const [name, setName] = useState();
  const [reps, setReps] = useState();
  const [weight, setWeight] = useState();
  const [unit, setUnit] = useState();
  const [date, setDate] = useState();
  let navigate = useNavigate();

  const addExercise = async () => {
    // const newExercise = { name, reps, weight, unit, date };
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises/", {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the Exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    navigate("/");
  };

  return (
    <div className="App">
      <header className="App-header2">
        <h1>Create Exercise</h1>

        <label>Exercise Name: </label>
        <input
          type="text"
          placeholder="Enter exercise here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label>Reps: </label>
        <input
          type="Number"
          placeholder="Enter reps here"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></input>
        <br />
        <label>Weight: </label>
        <input
          type="Number"
          placeholder="Enter weight here"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <br />
        <label>Units: </label>
        <input
          type="text"
          placeholder="Enter units here"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        ></input>
        <br />
        <label>Date: </label>
        <input
          type="text"
          placeholder="Enter Date here"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />
        <button className="submitButton" onClick={addExercise}>
          {" "}
          Submit New Exercise{" "}
        </button>
      </header>
    </div>
  );
}

export default CreateExercise;
