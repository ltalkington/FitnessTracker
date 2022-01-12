import "../App.css";
import Exercise from "./Exercise";

function ExercisesTable({ exercises, onEdit, onDelete }) {
  console.log(exercises);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Reps </th>
            <th> Weight </th>
            <th> Units </th>
            <th> Date </th>
            <th> Edit </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <Exercise
              exercise={exercise}
              onEdit={onEdit}
              onDelete={onDelete}
              key={i}
            />
          ))}
        </tbody>
        {/* <Exercise></Exercise>{" "} */}
      </table>
    </div>
  );
}

export default ExercisesTable;
