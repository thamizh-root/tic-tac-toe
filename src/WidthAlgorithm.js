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




//
//  Width Algorithm:

// Width respects the parent’s container size, while
// Height respects its own content size

// The height and width algorithms act similarly in that both use min-, max-, and the base value to clamp and constrain the computed size. 
// The crucial difference is how each element calculates its natural size: width stretches to fill its container by default, 
// whereas height only grows as large as its content requires unless explicitly set. 


