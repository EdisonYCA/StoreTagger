import "../index.css";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);

  return (
    <>
      <body>
        <Add add_type={"Store"}></Add>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p>
      </body>
    </>
  );
}

export default App;
