import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import {
  pageDisplayState,
  csvContentState,
  selectedBrandState,
  selectedModelState,
  uniqueBrandsState,
  availableModelsState,
  lastSupportedYearState,
  enteredMileageState,
  enteredYearState,
} from "../atoms";

import Papa from "papaparse";
import Dropdown from "./Dropdown";
import service_pricing_list from "../../src/service_pricing_list.csv";
import "./NewOrder.css";

const typeOfService = [
  "Chain change",
  "Oil and oil filter change",
  "Air filter change",
  "Brake fluid change",
];

const NewOrder = () => {
  // --- useState --- //
  const [yearErrorMessage, setYearErrorMessage] = useState();
  const [mileageErrorMessage, setMileageErrorMessage] = useState();

  // --- useRecoilState --- //
  const [, setPage] = useRecoilState(pageDisplayState);
  const [csvContent, setCsvContent] = useRecoilState(csvContentState);
  const [uniqueBrands, setUniqueBrands] = useRecoilState(uniqueBrandsState);
  const [selectedBrand, setSelectedBrand] = useRecoilState(selectedBrandState);
  const [availableModels, setAvailableModels] =
    useRecoilState(availableModelsState);
  const [selectedModel, setSelectedModel] = useRecoilState(selectedModelState);
  const [lastSupportedYear, setLastSupportedYear] = useRecoilState(
    lastSupportedYearState
  );
  const [enteredYear, setEnteredYear] = useRecoilState(enteredYearState);
  const [enteredMileage, setEnteredMileage] =
    useRecoilState(enteredMileageState);

  // --- useRefs --- //
  const yearInputRef = useRef();
  const mileageInputRef = useRef();

  //  --- useEffect --- //
  useEffect(() => {
    fetch(service_pricing_list)
      .then((response) => response.text())
      .then((responseText) => {
        Papa.parse(responseText, {
          complete: (parsedData) => {
            setCsvContent(parsedData.data);
          },
        });
      });
  }, []);

  useEffect(() => {
    var result = [];
    if (csvContent.length > 1) {
      csvContent.slice(1).filter((row) => {
        return result.push(row[0]);
      });
      setUniqueBrands(uniqueElementsFromArray(result));
      setSelectedBrand(result[0]);
    }
  }, [csvContent]);

  useEffect(() => {
    var result = [];
    if (selectedBrand) {
      csvContent.slice(1).map((row) => {
        if (row[0] === selectedBrand) {
          result.push(row[1]);
        }
      });
      setAvailableModels(result);
      setSelectedModel(result[0]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      csvContent.slice(1).map((row) => {
        if (row[0] === selectedBrand && row[1] === selectedModel) {
          setLastSupportedYear(row[2]);
        }
      });
    }
  }, [selectedModel]);

  // --- Event Handlers --- //
  const pageHandler = () => {
    setPage(2);
  };
  const cancelHandler = () => {
    setPage(1);
  };
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };
  const yearBlurHandler = () => {
    const yearValue = yearInputRef.current.value.trim();
    if (yearValue < lastSupportedYear || yearValue > new Date().getFullYear()) {
      setYearErrorMessage("Invalid input. Please choose valid year.");
    } else setYearErrorMessage("");
  };
  const mileageHandler = () => {
    const mileageValue = mileageInputRef.current.value.trim();
    if (mileageValue < enteredMileage) {
      setMileageErrorMessage("Invalid input. Please enter valid number.");
    } else setMileageErrorMessage("");
  };

  // --- Helper functions --- //
  const uniqueElementsFromArray = (elements) => {
    return elements.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  };

  //  --- Dynamic classes --- //
  const yearInputClasses = yearErrorMessage
    ? "input-field-error"
    : "input-field";
  const mileageInputClasses = mileageErrorMessage
    ? "input-field-error"
    : "input-field";

  return (
    <div className="new-order-container">
      <div className="left-side">
        <h2>New Order</h2>
        <Dropdown
          label="Select Brand"
          options={uniqueBrands}
          onChange={handleBrandChange}
        />
        <Dropdown
          label="Select Model"
          options={availableModels}
          onChange={handleModelChange}
        />
        <label className="label">Model year</label>
        <input
          className={yearInputClasses}
          ref={yearInputRef}
          type="text"
          placeholder="Enter Year"
          onBlur={yearBlurHandler}
        />
        {yearErrorMessage && <p className="error-text">{yearErrorMessage}</p>}

        <label className="label">Milleage</label>
        <input
          className={mileageInputClasses}
          ref={mileageInputRef}
          type="number"
          placeholder="Enter Milleage"
          onChange={mileageHandler}
        />
        {mileageErrorMessage && (
          <p className="error-text">{mileageErrorMessage}</p>
        )}
      </div>
      <div className="middle">
        <div className="label">Choose date:</div>
        <textarea></textarea>
        <div className="type-of-service">
          <label className="label">Type of service</label>
          {typeOfService.map((service) => {
            return (
              <label key={service} className="type-of-service-text">
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
        <button className="btn-cancel" onClick={cancelHandler}>
          Cancel Order
        </button>
        <button className="btn" onClick={pageHandler}>
          Create Order
        </button>
      </div>
    </div>
  );
};

export default NewOrder;
