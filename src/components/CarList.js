import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    const carList = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return {
      cars: carList,
      name: form.name,
    };
  });

  const handleClick = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleClick(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
