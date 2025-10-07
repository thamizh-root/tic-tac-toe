import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FlexboxPlaygrounds.css";

// https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

const options = {
  justify: [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ],
  align: ["stretch", "flex-start", "center", "flex-end"],
  direction: ["row", "row-reverse", "column", "column-reverse"],
};

export default function FlexboxPlayground() {
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [direction, setDirection] = useState("row");

  // Array of grayscale backgrounds for each box
  const grayscale = ["#222", "#555", "#aaa", "#eee"];

  return (
    <div className="page">
      <div className="container">
      {/* Flexbox Container */}
      <motion.div
        className="flexbox-container"
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="flexbox-item"
            layout
            style={{
              background: grayscale[i],
              border: "2px solid #111",
            }}
          />
        ))}
      </motion.div>

      {/* Controls */}
      <div className="controls">
        <Selector
          label="Direction"
          value={direction}
          setValue={setDirection}
          options={options.direction}
        />
        <Selector
          label="Justify Content"
          value={justify}
          setValue={setJustify}
          options={options.justify}
        />
        <Selector
          label="Align Items"
          value={align}
          setValue={setAlign}
          options={options.align}
        />
      </div>
      </div>
    </div>
  );
}

function Selector({ label, value, setValue, options }) {
  return (
    <div className="selector">
      <label className="selector-label">{label}</label>
      <select
        className="selector-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
