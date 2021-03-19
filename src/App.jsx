import "./App.css";
import React from "react";
import TrainingManager from "./components/TrainingManager.jsx";
import shortid from "shortid";

function App() {
  const trainings = [
    {
      id: shortid.generate(),
      timestamp: "13.02.2021",
      distance: 5.7,
    },
    {
      id: shortid.generate(),
      timestamp: "14.02.2021",
      distance: 14.2,
    },
    {
      id: shortid.generate(),
      timestamp: "15.02.2021",
      distance: 3.4,
    },
  ];
  return (
    <>
      <TrainingManager trainings={trainings} />
    </>
  );
}

export default App;
