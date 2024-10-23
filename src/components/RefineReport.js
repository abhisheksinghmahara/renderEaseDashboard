import React, { useState } from "react";
import styles from "../styles.module.css";
import cautionSvg from "../assets/caution.svg";
import searchSvg from "../assets/search.svg";
import crossSvg from "../assets/crossSvg.svg";
import nextBtn from "../assets/nextBtn.svg";
import prevBtn from "../assets/prevBtn.svg";
import assetChair from "../assets/assetChair.svg";
import assetLappi from "../assets/assetLappi.svg";
import assetLipstick from "../assets/assetLipstick.svg";
import assetShoe from "../assets/assetShoe.svg";
import assetRing from "../assets/assetRing.svg";


const RefineReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  //   const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);
    validateDates(selectedStartDate, endDate);
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setEndDate(selectedEndDate);
    validateDates(startDate, selectedEndDate);
  };

  const validateDates = (start, end) => {
    if (start && end) {
    }
  };

  // Formatting the dates
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const today = new Date().toISOString().split("T")[0];

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // pagination btn
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState(1);

  // Handler function to set the active button when clicked
  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className={styles.refineReportDiv}>
      <p className={styles.refineReportTxt}>Refine Report : </p>

      <div className={styles.filters}>
        <div className={styles.filterDate}>
          <label>By Date Range</label>
          <div className={styles.dateRange}>
            {isEditing ? (
              <p>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  max={today} // Disable future dates
                  placeholder="Start Date"
                />
                <span>-</span>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  max={today} // Disable future dates
                  min={startDate} // Ensure end date is after start date
                  placeholder="End Date"
                  onInput={() => setIsEditing(false)}
                />
              </p>
            ) : (
              <p className={styles.dateRange}>
                {`${formatDate(startDate)} - ${formatDate(endDate)}`}

                <button onClick={handleEditClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                      stroke="#090A21"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </p>
            )}
          </div>
          <p className={styles.dateRangeNote}>
            Note: Data collection started March 31, 2022. Any prior data cannot
            be retrived.
          </p>
        </div>
        <div className={styles.filterDate}>
          <div className={styles.domainSourceLabel}>
            <label>By Domain Source </label>
            <img src={cautionSvg} alt="cautionSvg" />
          </div>
          <select className={styles.domainSource}>
            <option className={styles.domainSourceOptions} value="">
              Enter Domain Name
            </option>
            <option className={styles.domainSourceOptions} value="a">
              A
            </option>
            <option className={styles.domainSourceOptions} value="b">
              B
            </option>
            <option className={styles.domainSourceOptions} value="c">
              C
            </option>
          </select>
        </div>

        <div className={styles.filterDate}>
          <label>By Workspace</label>
          <select className={styles.domainSource}>
            <option className={styles.domainSourceOptions} value="">
              Select Workspace
            </option>
            <option className={styles.domainSourceOptions} value="a">
              A
            </option>
            <option className={styles.domainSourceOptions} value="b">
              B
            </option>
            <option className={styles.domainSourceOptions} value="c">
              C
            </option>
          </select>
        </div>

        {/* or text cont  */}
        <div className={styles.orTxtCont}>
          <label className={styles.orTxt}>OR</label>
        </div>
        {/* by assets  */}
        <div className={styles.byAssets}>
          <label>By Assets</label>
          <div>
            <div className={styles.searchContainer}>
              <button className={styles.searchBtnDiv}>
                <img src={searchSvg} alt="searchSvg" />
              </button>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search by Assets name, tag, location, description, attribute..."
              />
            </div>
          </div>

          <select className={styles.domainSource}>
            <option className={styles.domainSourceOptions} value="">
              Select Workspace
            </option>
            <option className={styles.domainSourceOptions} value="day">
              A
            </option>
            <option className={styles.domainSourceOptions} value="month">
              B
            </option>
            <option className={styles.domainSourceOptions} value="week">
              C
            </option>
          </select>

          {/* show and remove appliedFilter  */}
          <div className={styles.appliedFilters}>
            <div className={styles.appliedFilter}>
              <span className={styles.appliedFilterTxt}>Tag</span>
            </div>
            <div className={styles.appliedFilter}>
              <span className={styles.appliedFilterTxt}>Location</span>
            </div>
            <div className={styles.appliedFilter}>
              <span className={styles.appliedFilterTxt}>Description</span>
            </div>
            <button className={styles.crossBtn}>
              <img src={crossSvg} alt="crossSvg" />
            </button>
          </div>
        </div>
      </div>
      {/* selecting assets cont  */}
      <div className={styles.assetselectionCont}>
        {/* asset 1 */}
        <div className={styles.assetselectionContRow}>
          <div className={styles.checkBoxStyling} >
          <input className={styles.checkBoxScaling} type="checkbox" id="chair1" name="chair1" />
          </div>
          <div className={styles.assetImgDiv}>
            <img className={styles.assetImg} src={assetChair} alt="assetImg" />
          </div>
          <div className={styles.assetName}>
            <span className={styles.assetNameTxt}>Chair.glb</span>
          </div>
        </div>
        {/* asset 2  */}
        <div className={styles.assetselectionContRow}>
          <div className={styles.checkBoxStyling} >
          <input className={styles.checkBoxScaling} type="checkbox" id="chair1" name="chair1" />
          </div>
          <div className={styles.assetImgDiv}>
            <img className={styles.assetImg} src={assetLipstick} alt="assetLipstick" />
          </div>
          <div className={styles.assetName}>
            <span className={styles.assetNameTxt}>Lipstick.glb</span>
          </div>
        </div>
        {/* asset 3  */}
        <div className={styles.assetselectionContRow}>
          <div className={styles.checkBoxStyling} >
          <input className={styles.checkBoxScaling} type="checkbox" id="chair1" name="chair1" />
          </div>
          <div className={styles.assetImgDiv}>
            <img className={styles.assetImg} src={assetLappi} alt="assetLappi" />
          </div>
          <div className={styles.assetName}>
            <span className={styles.assetNameTxt}>Laptop.zip</span>
          </div>
        </div>
        {/* asset 4  */}
        <div className={styles.assetselectionContRow}>
          <div className={styles.checkBoxStyling} >
          <input className={styles.checkBoxScaling} type="checkbox" id="chair1" name="chair1" />
          </div>
          <div className={styles.assetImgDiv}>
            <img className={styles.assetImg} src={assetShoe} alt="assetShoe" />
          </div>
          <div className={styles.assetName}>
            <span className={styles.assetNameTxt}>Shoes.glb</span>
          </div>
        </div>
        {/* asset 5  */}
        <div className={styles.assetselectionContRow}>
          <div className={styles.checkBoxStyling} >
          <input className={styles.checkBoxScaling} type="checkbox" id="chair1" name="chair1" />
          </div>
          <div className={styles.assetImgDiv}>
            <img className={styles.assetImg} src={assetRing} alt="assetRing" />
          </div>
          <div className={styles.assetName}>
            <span className={styles.assetNameTxt}>Ring.zip</span>
          </div>
        </div>
       
        
      </div>

      {/* pagination  */}
      <div className={styles.paginationCont}>
        <button
          onClick={() => {
            setActiveButton(activeButton - 1);
          }}
        >
          <img src={prevBtn} alt="prevbtn" />
        </button>
        {/* Numbered buttons */}
        {[1, 2, "...", 6, 7, 8].map((number, index) => (
          <button
            key={index}
            className={number === activeButton ? styles.active : ""}
            onClick={() => {
              if (typeof number === "number") {
                handleClick(number);
              }
            }}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => {
            setActiveButton(activeButton + 1);
          }}
        >
          <img src={nextBtn} alt="nextBtn" />
        </button>
      </div>
    </div>
  );
};
export default RefineReport;
