import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LeftNav from "./LeftNav";
import Upgrade from "./Upgrade";
import data from "../data/bac.json";
import BuyABus from "./BuyABus";
import Modal from "./Modal";
import Login from "./Login";

function BuyACar(props) {
  const [carSelected, setCarSelected] = useState({ car: "none", cost: 10 });
  const [modalMessage, setModalMessage] = useState({ message: "" });

  //  open/close the model
  const togglePopup = () => {
    props.setIsOpen(!props.isOpen);
  };

  const confirmed = () => {
    props.setStats((prevState) => ({
      ...prevState,
      car: carSelected.car,
      money: prevState.money - carSelected.cost,
    }));
    console.log(carSelected.car);
  };

  // When a car card is pressed this function will run
  const handleClick = (updatedCar, costings) => {
    if (props.stats.money >= costings) {
      setModalMessage({
        message: "Are you sure you want to Purchase this Vehicle?",
        options: 2,
      });

      setCarSelected({ car: updatedCar, cost: costings });

      togglePopup();
    } else {
      setModalMessage({
        message: `you cant afford this, you only have ${props.stats.money}`,
        options: 1,
      });

      togglePopup();
    }
  };

  // creates car cards
  const cars = data.map((car) => {
    return (
      <div
        onClick={() => {
          handleClick(car.Make, car.Cost);
        }}
        className="car-card"
        key={car.id}
      >
        <p>Make: {car.Make}</p>
        <p>Model: {car.Model}</p>
        <p>BHP: {car.BHP}</p>
        <p>Seats: {car.Seats}</p>
        <p>
          Cost: ${car.Cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
    );
  });

  return (
    <div className="full-main">
      <LeftNav />
      
      <Routes>
        <Route

        // Need to refactor the below to have buy your own car as a sepearte component
          path="/bac"
          element={
            <div className={props.isOpen ? "tran" : "right-main"}>
              {props.isOpen && (
                <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} togglePopup={togglePopup} confirmed={confirmed} txt={modalMessage}/>
              )}
              <div className="page-title">
                <h1>Buy a Car</h1>
              </div>
              <div className="car-container">{cars}</div>
            </div>
          }
        />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/buy-a-business" element={<BuyABus />} />
      </Routes>
    </div>
  );
}

export default BuyACar;
