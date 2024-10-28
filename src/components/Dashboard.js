import React from "react";
import styles from "../styles.module.css";
import RefineReport from "./RefineReport";
import AnalyticsCont from "./AnalyticsCont";
import CurrentReport from "./CurrentReport";
import Graphs from "./Graphs";

const Dashboard = () => {
  return (
    <div className={styles.dashboardDiv}>
      {/* analyticsTxtButton Container */}
      <AnalyticsCont />
      {/* Current Report and Graph Div */}
      <div className={styles.currentReportGraphDiv}>
        <CurrentReport />
        {/* graphs div  and refine report div */}
        <div className={styles.graphsdiv}>
          {/* left cards cont  */}
          <Graphs />
          {/* refine Report Div */}
          <RefineReport />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
