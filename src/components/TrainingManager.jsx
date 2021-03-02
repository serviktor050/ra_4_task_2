import React from "react";
import { useState } from "react";
import TrainingForm from "./TrainingForm.jsx";
import TrainingList from "./TraningList.jsx";
import converterDate from "../functions/converterDate.js";
import reConverterDate from "../functions/reConverterDate.js";

const trainingMapper = (rawTraning) => ({
  id: rawTraning.id,
  timestamp: rawTraning.timestamp,
  distance: rawTraning.distance,
});

export default function TrainingManager(props) {
  const { trainings } = props;

  const [trainingsData, setTrainingsData] = useState(trainings);

  const onNewTraining = (timestamp, distance) => {
    if (timestamp !== "" && distance !== "") {
      const newPrev = [];
      const array = [];

      setTrainingsData((prev) => {
        prev.map((object) => {
          object.timestamp = new Date(
            converterDate(object.timestamp)
          ).getTime();

          if (
            new Date(converterDate(timestamp)).getTime() === object.timestamp
          ) {
            object.distance = Number(object.distance) + Number(distance);
            newPrev.push(...prev);
            return newPrev;
          } else {
            return newPrev;
          }
        });

        if (newPrev.length !== 0) {
          return newPrev;
        } else {
          //Сравнение дат

          array.push(...prev, {
            id: prev[prev.length - 1].id + 1,
            timestamp: new Date(converterDate(timestamp)).getTime(),
            distance: distance,
          });

          array.sort((a, b) => a.timestamp - b.timestamp);

          array.forEach((object) => {
            object.timestamp = reConverterDate(object.timestamp);
          });

          return array;
        }
      });
    } else {
      setTrainingsData((prev) => {
        return prev;
      });
    }
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
