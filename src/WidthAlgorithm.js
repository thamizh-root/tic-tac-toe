import { useState } from 'react';
import './WidthAlgorithm.css';

export default function WidthAlgorithm() {

  return (
    <>
      <h1 className="maxContent">
        This heading's width expands to fit all its content without wrapping.
      </h1>

      <h1 className="minContent">
        This heading's width shrinks to the smallest necessary to contain its content.
      </h1>

      <h1 className="fitContent">
        This heading's width fits its content but won't exceed its parent's width.
      </h1>

      <h1 className="minMaxWidth">
        This heading has a flexible width (80%) but stays between 400px and 800px.
      </h1>

    </>
  );
}

