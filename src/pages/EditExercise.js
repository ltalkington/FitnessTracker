import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditExercise({ exerciseToEdit, setExerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);
  let navigate = useNavigate();

  const EditExercise = async () => {
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      alert("Successfully edited the exercise!");
    } else {
      alert(`Failed to edit exercise, status code = ${response.status}`);
    }
    navigate("/");
  };
  return (
    <div className="App">
      <header className="App-header2">
        <h1>Edit Exercise</h1>

        <label>Exercise Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label>Reps: </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></input>
        <br />
        <label>Weight: </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <br />
        <label>Units: </label>
        <input
          type="text"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        ></input>
        <br />
        <label>Date: </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br />
        <button className="submitButton" onClick={EditExercise}>
          {" "}
          Edit Exercise
        </button>
      </header>
    </div>
  );
}

export default EditExercise;
