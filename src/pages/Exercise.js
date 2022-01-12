import "../App.css";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";

function Exercises({ exercise, onEdit, onDelete }) {
  return (
    <tr>
      <td> {exercise.name}</td>
      <td> {exercise.reps}</td>
      <td> {exercise.weight}</td>
      <td> {exercise.unit}</td>
      <td> {exercise.date}</td>
      <td>
        {" "}
        <AiFillEdit
          onClick={() => {
            onEdit(exercise);
          }}
        />
      </td>
      <td>
        {" "}
        <AiOutlineCloseCircle
          onClick={() => {
            onDelete(exercise._id);
          }}
        />
      </td>
    </tr>
  );
}

export default Exercises;
