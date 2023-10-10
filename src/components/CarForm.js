import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, addCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  const handleCostChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch(addCost(value));
  };

  const handleNameChange = (event) => {
    dispatch(addName(event.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Car Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
