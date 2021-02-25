import React from "react";
import { useState } from "react";

const DEFAULT_FORM = {
  timestamp: "",
  distance: "",
};

export default function TrainingForm(props) {
  const { onAdd } = props;

  const [state, setState] = useState(DEFAULT_FORM);

  const onFormFieldChangeTimestamp = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        timestamp: e.target.value,
      };
      return newState;
    });
  };

  const onFormFieldChangeDistance = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        distance: Number(e.target.value),
      };
      return newState;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(state.timestamp, state.distance);

    setState((prev) => ({ ...prev, timestamp: "", distance: "" }));
  };

  return (
    <form className="training-form" onSubmit={onSubmit}>
      <div className="input-data-training">
        <label htmlFor="data-training">Дата (ДД.ММ.ГГ)</label>
        <input
          type="text"
          id="data-training"
          name="data-training"
          onChange={onFormFieldChangeTimestamp}
          value={state.timestamp}
          placeholder="01.01.2021"
        />
      </div>
      <div className="input-distance">
        <label htmlFor="distance">Пройдено км</label>
        <input
          type="text"
          id="distance"
          name="distance"
          onChange={onFormFieldChangeDistance}
          value={state.distance}
          placeholder="1.5"
        />
      </div>
      <input className="input-button" type="submit" value="Ok" />
    </form>
  );
}
