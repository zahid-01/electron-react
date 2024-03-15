import axios from "axios";
import * as React from "react";

import { data } from "./data";

const Test = () => {
  const [toDos, setToDos] = React.useState([]);

  const handler = () => {
    setToDos(data);
  };

  console.log(toDos);

  return (
    <>
      {toDos.length && (
        <table>
          <tr>
            <td>User Id</td>
            <td>Title</td>
            <td>Completed</td>
          </tr>
          {toDos.map((el) => {
            return (
              <tr key={el.id}>
                {" "}
                {/* Add a unique key prop */}
                <td>{el.userId}</td>
                <td>{el.title}</td>
                <td>{el.completed.toString()}</td>{" "}
                {/* Assuming 'completed' is a boolean, use toString() to convert it to a string */}
              </tr>
            );
          })}
        </table>
      )}
      <button onClick={handler}>Click TO Fetch Data</button>
    </>
  );
};

export default Test;
