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
      const oldArray = [];

      setTrainingsData((prev) => {
        prev.map((object) => {
          object.timestamp = new Date(
            converterDate(object.timestamp)
          ).getTime();
          console.log(object);

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
          oldArray.push(...prev, {
            id: prev[prev.length - 1].id + 1,
            timestamp: new Date(converterDate(timestamp)).getTime(),
            distance: distance,
          });

          oldArray.sort((a, b) => a.timestamp - b.timestamp); //Сортировка по дате работает

          console.log(oldArray);

          oldArray.forEach((object) => {
            let newObJ = {
              id: object.id,
              timestamp: reConverterDate(object.timestamp),
              distance: object.distance,
            };
            console.log(newObJ);
            return newObJ;
          });

          /*
          const reConveredOldArray = oldArray.map((object) => {
            object.timestamp = reConverterDate(object.timestamp);


            let newObject = {
              id: object.id,
              timestamp: reConverterDate(object.timestamp),
              distance: object.distance,
            };
            return newObject;
            
          });*/

          return oldArray;

          /*
          for (let item of reConveredOldArray) {
            oldArray.push(item);
          }
*/

          //oldArray.splice(0, oldArray.length);

          /*
          oldArray.forEach((object) => {
            object.timestamp = reConverterDate(object.timestamp);
            console.log(object.timestamp);
          });
*/
          //oldArray.splice(0, oldArray.length);
          /*

          console.log(oldArray);
*/

          /*
          const sortedMappedOldArray = sortTraining(mappedOldArray);

          console.log(newArray);

          const newArray = sortedMappedOldArray.map((object) => {
            let reconvertedDate = reConverterDate(object.timestamp);
            let afterConvertObject = {
              id: object.id,
              timestamp: reconvertedDate,
              distance: object.distance,
            };
            return afterConvertObject;
          });
          console.log(newArray);
          return newArray;

          /*[
            ...prev,
            {
              id: prev[prev.length - 1].id + 1,
              timestamp: timestamp,
              distance: distance,
            },
          ];*/
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
