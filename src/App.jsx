import "./App.css";
import React from "react";
import TrainingManager from "./components/TrainingManager.jsx";

function App() {
  const trainings = [
    {
      id: 1,
      timestamp: "13.02.2021",
      distance: 5.7,
    },
    {
      id: 2,
      timestamp: "14.02.2021",
      distance: 14.2,
    },
    {
      id: 3,
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
