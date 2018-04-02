import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Chess/Board';
import { observe } from './Chess/Game';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);
registerServiceWorker();
