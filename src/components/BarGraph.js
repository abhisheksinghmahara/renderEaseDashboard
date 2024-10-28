import styles from '../styles.module.css'; // Ensure this path is correct
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

const BarGraph = () => {
  const data = [
    { name: 'Nov 1', pv: 17 },
    { name: 'Nov 2', pv: 9 },
    { name: 'Nov 3', pv: 19 },
    { name: 'Nov 4', pv: 13 },
    { name: 'Nov 5', pv: 17 },
    { name: 'Nov 6', pv: 14 },
    { name: 'Nov 7', pv: 13 },
    { name: 'Nov 8', pv: 25 },
  ];

  const getIntroOfPage = (label) => {
    switch (label) {
      case 'Nov 1':
        return "Nov 1 data insight";
      case 'Nov 2':
        return "Nov 2 data insight";
      case 'Nov 3':
        return "Nov 3 data insight";
      case 'Nov 4':
        return "Nov 4 data insight";
      case 'Nov 5':
        return "Nov 5 data insight";
      case 'Nov 6':
        return "Nov 6 data insight";
      case 'Nov 7':
        return "Nov 7 data insight";
      case 'Nov 8':
        return "Nov 8 data insight";
      default:
        return '';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.label}>{`${label} : ${payload[0].value}`}</p>
          <p className={styles.intro}>{getIntroOfPage(label)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.cardD}>
      <div className={styles.cardCHead}>
        <span className={styles.cardAHeading}>Total 3D Views:</span>
        <span>
          <select className={styles.inputOptions} id="period-select">
            <option value="day">By Day</option>
            <option value="month">By Month</option>
            <option value="week">By Week</option>
          </select>
        </span>
      </div>
      <div className={styles.cardDContent}  >
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top:  20, right: 5, left: -30, bottom:  0 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#244ACE" />
                <stop offset="95%" stopColor="#7924CE" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3.75 3.75" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#7F7F8A", lineHeight:"145%",fontWeight:"500",fontStyle:"normal" }} />
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend /> */}
            <Bar
              dataKey="pv"
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
              barSize={"5%"}
              className={styles.barStylings}
            />
            <YAxis 
             tick={{ fontSize: 12, fill: "#475367", fontWeight:"500", lineHeight:"145%", fontStyle:"normal" }}
              axisLine={false} 
              tickLine={false} 
              // domain={[0, 'dataMax + 7']}
              tickCount={6} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraph;
