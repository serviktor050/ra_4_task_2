import React from "react";
import { useState } from "react";
import TrainingForm from "./TrainingForm.jsx";
import TrainingList from "./TraningList.jsx";
import moment from "moment";
import shortid from "shortid";

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
      setTrainingsData((prev) => {
        const newPrev = prev.map((object) => {
          return object;
        });

        let addObject = {
          id: shortid.generate(),
          timestamp: moment(timestamp, "DD.MM.YYYY")._i,
          distance: distance,
        };

        let findElement = newPrev.find(
          (item) => item.timestamp === addObject.timestamp
        );

        if (!findElement) {
          newPrev.push(addObject);
        } else {
          findElement.distance =
            Number(findElement.distance) + Number(addObject.distance);
        }

        newPrev.sort(
          (a, b) =>
            moment(a.timestamp, "DD.MM.YYYY") -
            moment(b.timestamp, "DD.MM.YYYY")
        );
        return newPrev;
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
