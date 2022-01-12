import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ExercisesTable from "./ExercisesTable";
import { useNavigate } from "react-router-dom";

function HomePage({ exerciseToEdit, setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  let navigate = useNavigate();

  const onDelete = async (id) => {
    const response = await fetch(`/exercises/${id}`, { method: "DELETE" });
    if (response.status === 204) {
      const getResponse = await fetch("/exercises/");
      const exercises = await getResponse.json();
      setExercises(exercises);
    } else {
      console.error(
        `Failed to delete exercise with id = ${id}, status code = ${response.status}`
      );
    }
  };

  const onEdit = async (exerciseToEdit) => {
    setExerciseToEdit(exerciseToEdit);
    console.log(exerciseToEdit);
    navigate("/editexercise");
  };

  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json();
    setExercises(exercises);
  };

  useEffect(() => {
    loadExercises();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <ExercisesTable
          exercises={exercises}
          onEdit={onEdit}
          onDelete={onDelete}
        ></ExercisesTable>
        <Link className="App-link" to="/createExercise">
          {" "}
          Create a new exercise{" "}
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
