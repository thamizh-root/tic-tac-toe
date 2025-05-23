import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WidthAlgorithm from './WidthAlgorithm';
import HeightAlgorithm from './HeightAlgorithm/HeightAlgorithm'; 
import MarginCollapse from './MarginCollapse/MarginCollapse'; 
import Game from './Game/Game';
import SandboxPlayground from './SandboxPlayground';
import Trail from './Trail';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <WidthAlgorithm /> */}
    {/* <MarginCollapse /> */}
    {/* <HeightAlgorithm /> */}
    {/* <SandboxPlayground /> */}
    <Trail />
    {/* <Game /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
