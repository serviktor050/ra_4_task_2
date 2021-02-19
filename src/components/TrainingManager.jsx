import React from "react";
import { useState } from "react";
import TrainingForm from "./TrainingForm.jsx";
import TrainingList from "./TraningList.jsx";

const trainingMapper = (rawTraning) => ({
  id: rawTraning.id,
  timestamp: rawTraning.timestamp,
  distance: rawTraning.distance,
});

export default function TrainingManager(props) {
  const { trainings } = props;

  const [trainingsData, setTrainingsData] = useState(trainings);

  const onNewTraining = (timestamp, distance) => {
    setTrainingsData((prev) => {
      return [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          timestamp: timestamp,
          distance: distance,
        },
      ];
    });
  };

  const trainingsViewData = trainingsData.map(trainingMapper);

  const deleteTraining = (id) => {
    setTrainingsData((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  return (
    <>
      <TrainingForm onAdd={onNewTraining} />
      <div className="training-list">
        <div className="training-header">
          <div className="training-header-data">
            <p>Дата (ДД.ММ.ГГ)</p>
          </div>
          <div className="training-header-distance">
            <p>Пройдено км</p>
          </div>
          <div className="training-header-action">
            <p>Действия</p>
          </div>
        </div>
        <div className="trainings">
          <TrainingList
            trainings={trainingsViewData}
            onDelete={deleteTraining}
          />
        </div>
      </div>
    </>
  );
}
