import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import donut from "../assets/donut.svg"; // Import the SVG
import styles from "../styles.module.css";

const data = [
  { name: "Desktop", value: 68 },
  { name: "Mobile", value: 32 },
];

// Gradient fills for the Desktop and Mobile categories
const GRADIENTS = [
  "linear-gradient(100deg, #244ACE 7.62%, #7924CE 55.22%)",
  "linear-gradient(100deg, #244ACE 7.62%, #7924CE 55.22%)",
];

const spanOpacity = ["1", "0.8"];
const graphOpacity = ["1", "0.6"];

// Custom Legend Component with Circular Gradient Indicators
const CustomLegend = ({ payload }) => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center", fontFamily: "Outfit", fontSize: "14px" }}>
    {payload.map((entry, index) => (
      <div key={`item-${index}`} style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: GRADIENTS[index],
            opacity: spanOpacity[index],
            marginRight: "8px",
          }}
        ></span>
        <span style={{ color: "#000" }}>{entry.value}</span>
      </div>
    ))}
  </div>
);

// Custom Label Component for displaying values in the middle of each Pie slice
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Position label at the middle of each slice
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="#FFF"
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontFamily: "Satoshi",
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "17.4px",
        fontFeatureSettings: "'cv01' on, 'cv03' on, 'cv04' on",
        textAlign: "center",
      }}
    >
      {`${data[index].value}%`}
    </text>
  );
};

const DonutGraph = () => {
  return (
    <div className={styles.cardB} style={{ fontFamily: "Outfit", fontSize: "14px" }}>
      <div className={styles.cardAHeading}>3D Views by Device Category :</div>
      <div className={styles.cardBContent} style={{ position: "relative" }}>
        <img src={donut} alt="Donut background" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2 }} />
        
        <div className={styles.donutGraph} style={{ position: "relative", zIndex: 2 }}>
          <ResponsiveContainer>
            <PieChart>
              <defs>
                <linearGradient id="desktopGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="7.62%" stopColor="#244ACE" />
                  <stop offset="55.22%" stopColor="#7924CE" />
                </linearGradient>
                <linearGradient id="mobileGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="7.62%" stopColor="#244ACE" />
                  <stop offset="55.22%" stopColor="#7924CE" />
                </linearGradient>
              </defs>
              <Pie
                data={data}
                cx={135} // Center X position
                cy={135} // Center Y position
                innerRadius={84} // Inner radius for the donut effect
                outerRadius={140} // Outer radius for the donut effect
                paddingAngle={8}
                dataKey="value"
                stroke="none"
                strokeWidth={0}
                startAngle={95}
                endAngle={-275}
                labelLine={false}
                label={renderCustomLabel} // Use custom label for styling data values
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#${index === 0 ? "desktopGradient" : "mobileGradient"})`}
                    fillOpacity={graphOpacity[index]} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DonutGraph;
