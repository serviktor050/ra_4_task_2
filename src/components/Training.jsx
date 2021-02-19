import React from "react";

export default function Training(props) {
  const { training, onDelete } = props;

  return (
    <div className="training">
      <div className="t-date">{training.timestamp}</div>
      <div className="t-distance">{training.distance}</div>
      <div className="t-action">
        <input
          className="input-delete"
          type="submit"
          value="X"
          onClick={() => onDelete(training.id)}
        />
      </div>
    </div>
  );
}
