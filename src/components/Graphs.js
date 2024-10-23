import React from "react";
import styles from "../styles.module.css";
import tabImg from "../assets/tabImg.jpg";

const Graphs = () => {
  return (
    <div className={styles.graphleftDiv}>
      <div className={styles.cardPair}>
        {/* card A  */}
        <div className={styles.cardA}>
          <div className={styles.cardAHead}>
            <span className={styles.cardAHeading}>Most Viewed Asset : </span>
          </div>
          <div className={styles.cardAContent}>
            <div className={styles.cardAImgDiv}>
              <img src={tabImg} alt="mobile" />
            </div>
            <div className={styles.cardAInfoDiv}>
              <p className={styles.cardAInfoHead}>
                Workspace:
                <span className={styles.cardAInfoDes}> Cosmetics</span>
              </p>
              <p className={styles.cardAInfoHead}>
                Total 3D Views:
                <span className={styles.cardAInfoDes}> 11</span>
              </p>
              <p className={styles.cardAInfoHead}>
                Total AR Views:
                <span className={styles.cardAInfoDes}> 2</span>
              </p>
              <p className={styles.cardAInfoHead}>
                User Engagement:
                <span className={styles.cardAInfoDes}> 26%</span>
              </p>
              <p className={styles.cardAInfoHead}>
                Avg. Interaction:
                <span className={styles.cardAInfoDes}> 4</span>
              </p>
              <p className={styles.cardAInfoHead}>
                Pipeline:<span className={styles.cardAInfoDes}> CLO</span>
              </p>
              <span className={styles.cardATagBtn}>
                <p className={styles.cardAInfoHead}>
                  Tag:
                  <button className={styles.cardAInfoDesBtn}> SS24</button>
                </p>
              </span>

              <p className={styles.cardAInfoHead}>
                Attributes:
                <span className={styles.cardAInfoDes}> None</span>
              </p>
            </div>
          </div>
        </div>
        {/* card B */}
        <div className={styles.cardB}>
          <div className={styles.cardAHeading}>
            3D Views by Device Category :{" "}
          </div>
          <div className={styles.cardAContent}>Frame for Graph B</div>
        </div>
      </div>
      <div className={styles.cardPair}>
        {/* card C  */}

        <div className={styles.cardC}>
          <div className={styles.cardCHead}>
            <span className={styles.cardAHeading}>Total AR Views :</span>
            <span>
              <select className={styles.inputOptions} id="period-select">
                <option value="day">By Day</option>
                <option value="month">By Month</option>
                <option value="week">By Week</option>
              </select>
            </span>
          </div>
          <div className={styles.cardAContent}>Frame for Graph C</div>
        </div>
        {/* card D  */}

        <div className={styles.cardC}>
          <div className={styles.cardCHead}>
            <span className={styles.cardAHeading}>Total 3D Views :</span>
            <span>
              <select className={styles.inputOptions} id="period-select">
                <option value="day">By Day</option>
                <option value="month">By Month</option>
                <option value="week">By Week</option>
              </select>
            </span>
          </div>
          <div className={styles.cardAContent}>Frame for Graph D</div>
        </div>
      </div>
    </div>
  );
};
export default Graphs;
