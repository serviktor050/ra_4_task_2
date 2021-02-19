import React from "react";
import Training from "./Training.jsx";

export default function TrainingList(props) {
  const { trainings, onDelete } = props;

  return trainings.map((training) => (
    <Training training={training} onDelete={onDelete} />
  ));
}
