import { useState } from "react";
import { useRecoilState } from "recoil";
import { pageDisplayState } from "../atoms";
import Dropdown from "./Dropdown";
import "./NewOrder.css";

const typeOfService = [
  "Chain change",
  "Oil and oil filter change",
  "Air filter change",
  "Brake fluid change",
];

const NewOrder = () => {
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [, setState] = useRecoilState(pageDisplayState);

  const pageHandler = () => {
    setState((pageDisplayState) => {
      return pageDisplayState - 1;
    });
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <div className="new-order-container">
      <div className="left-side">
        <h2>New Order</h2>
        <Dropdown
          label="Select Brand"
          options={[
            { name: "Aprillia", value: "aprillia" },
            { name: "Ducati", value: "ducati" },
            { name: "Yamaha", value: "yamaha" },
          ]}
          onChange={handleBrandChange}
        />
        <Dropdown
          label="Select Model"
          options={[
            { name: "RS 50", value: "rs50" },
            { name: "Panigale V4", value: "panigale4" },
            { name: "MT-03", value: "mt03" },
          ]}
          onChange={handleModelChange}
        />

        <div className="input-field">
          <label className="label">Model year</label>
          <input type="text" placeholder="Enter Year" />
        </div>
        <div className="input-field">
          <label className="label">Milleage</label>
          <input type="number" placeholder="Enter Milleage" />
        </div>
      </div>
      <div className="middle">
        <div className="label">Choose date:</div>
        <textarea></textarea>
        <div className="type-of-service">
          <label className="label">Type of service</label>
          {typeOfService.map((service) => {
            return (
              <label className="type-of-service-text">
                <input type="checkbox" className="checkbox-round" />
                {service}
              </label>
            );
          })}
        </div>
        <div className="note">
          <p>
            <strong>Note: Consider discount options</strong>
          </p>
          <p>
            <span>40 EUR OFF</span> for full service{" "}
          </p>
          <p>
            <span>20% OFF</span> - Chain change + Oil and oil filter change +
            Air filter change
          </p>
          <p>
            <span>20 EUR OFF</span> - Oil and oil filter change + Air filter
            change{" "}
          </p>
          <p>
            <span>15% OFF</span> - Chain change + Brake fluid change
          </p>
        </div>
      </div>
      <div className="right-side">
        <div className="order-date">
          <h3>Order Summary</h3>
          <p>March 24, 2022 at 13:42</p>
        </div>

        <button className="btn-cancel">Cancel Order</button>
        <button className="btn" onClick={pageHandler}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default NewOrder;
