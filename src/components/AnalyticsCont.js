import React, { useState } from "react";
import styles from "../styles.module.css";
import createSymbol from '../assets/createSymbol.svg';
const AnalyticsCont=()=>{
    const [activeButton, setActiveButton] = useState("Analytics"); // Default active button
     const btnArr=["Analytics","Sessions","Conversions","Preference","Hotspot","All Events"]
    const handleClick = (buttonName) => {
      setActiveButton(buttonName); // Set the active button
    };
    return(
        <div className={styles.analyticsTxtButtonCont}>
        <div className={styles.analyticsTxtCont}>
          <span className={styles.analyticsSpan}>Analytics</span>
          <button className={styles.create3dModelBtn}>
            <img src={createSymbol} alt="createSymbol"/>
           
            
            Create 3D Model
          </button>
        </div>

        <div className={styles.analyticsButtonCont}>
          {/* Button container with dynamic blue block */}
          {btnArr.map((buttonName) => (
            <button
              key={buttonName}
              className={`${styles.analyticsButton} ${
                activeButton === buttonName ? styles.activeButton : ""
              }`}
              onClick={() => handleClick(buttonName)}
            >
              {buttonName}
              {activeButton === buttonName && (
                <span className={styles.blueBlock}></span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
}
export default AnalyticsCont;