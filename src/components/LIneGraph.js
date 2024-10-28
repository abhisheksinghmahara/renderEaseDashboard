import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styles from "../styles.module.css";

// Sample data for different periods
const dataByDay = [
  { name: 'Nov 1', pv: 5 },
  { name: 'Nov 2', pv: 6.5 },
  { name: 'Nov 3', pv: 1.5 },
  { name: 'Nov 4', pv: 8.25 },
  { name: 'Nov 5', pv: 3 },
  { name: 'Nov 6', pv: 6.5 },
  { name: 'Nov 7', pv: 6 },
  { name: 'Nov 8', pv: 3 },
];

const dataByWeek = [
  { name: 'Week 1', pv: 25 }, // Aggregate of the first week
  { name: 'Week 2', pv: 18 }, // Aggregate of the second week
  { name: 'Week 3', pv: 17 }, // Aggregate of the second week
  { name: 'Week 4', pv: 11 }, // Aggregate of the second week
  { name: 'Week 5', pv: 17 }, // Aggregate of the second week
  { name: 'Week 6', pv: 9 }, // Aggregate of the second week
  { name: 'Week 7', pv: 22 }, // Aggregate of the second week
];

const dataByMonth = [
  { name: 'July', pv: 29 }, // Fixed value for November
  { name: 'August', pv: 33 },
  { name: 'September', pv: 43}, // Random value between 20 and 119
  { name: 'October', pv: 30 },   // Random value between 30 and 129
  
  { name: 'November', pv: 60 }, // Aggregate of the entire month
  { name: 'December', pv: 80 }, // For example, next month
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.label}>{`${label} : ${payload[0].value} AR VIEWS`}</p>
      </div>
    );
  }
  return null;
};

const LineGraph = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('day');
  const [chartData, setChartData] = useState(dataByDay);

  const handlePeriodChange = (event) => {
    const period = event.target.value;
    setSelectedPeriod(period);
    switch (period) {
      case 'day':
        setChartData(dataByDay);
        break;
      case 'week':
        setChartData(dataByWeek);
        break;
      case 'month':
        setChartData(dataByMonth);
        break;
      default:
        setChartData(dataByDay);
    }
  };

  return (
    <div className={styles.cardC}>
      <div className={styles.cardCHead}>
        <span className={styles.cardAHeading}>Total AR Views :</span>
        <span>
          <select className={styles.inputOptions} id="period-select" onChange={handlePeriodChange} value={selectedPeriod}>
            <option value="day">By Day</option>
            <option value="week">By Week</option>
            <option value="month">By Month</option>
          </select>
        </span>
      </div>
      <div className={styles.cardCContent}>
        <ResponsiveContainer>
          <LineChart data={chartData} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7F7F8A", lineHeight: "145%", fontWeight: "500", fontStyle: "normal" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={6}
              tick={{ fontSize: 12, fill: "#475367", fontWeight: "500", lineHeight: "145%" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="linear"
              dataKey="pv"
              stroke="rgba(245, 102, 48, 1)" // Set the stroke color here
              strokeWidth={2} // Set the stroke width
              dot={{ r: 4 }} // Size of the dots
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
