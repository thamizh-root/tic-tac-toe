import React from 'react';
import './index.css';
import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';


export default function SandboxPlayground() {

  const widthAlgoJS = `import { useState } from 'react';
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
}`;

  const widthAlgoCSS = `.maxContent {
  width: max-content;
  background-color: mediumspringgreen;
}

.minContent {
  width: min-content;
  background-color: fuchsia;
}

.fitContent{
  width: fit-content;
  background-color: rgb(165, 161, 209);
}

.minMaxWidth{
  width: 80%;
  min-width: 400px;
  max-width: 800px;
  background-color: hsl(120deg, 50%, 50%);
}
`

  const files = {
    '/App.js': widthAlgoJS,
    '/WidthAlgorithm.css': widthAlgoCSS,
  };

  return (
    <>
      <Sandpack
        template="react"
        files={files}
        theme={nightOwl}
      />
    </>
  );
}