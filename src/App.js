import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <header className="App-header">
            <body>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <HomePage
                      exerciseToEdit={exerciseToEdit}
                      setExerciseToEdit={setExerciseToEdit}
                    ></HomePage>
                  }
                ></Route>

                <Route
                  path="/createexercise"
                  exact
                  element={<CreateExercise></CreateExercise>}
                ></Route>
                <Route
                  path="/editexercise"
                  exact
                  element={
                    <EditExercise
                      exerciseToEdit={exerciseToEdit}
                      setExerciseToEdit={setExerciseToEdit}
                    ></EditExercise>
                  }
                ></Route>
              </Routes>
            </body>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
