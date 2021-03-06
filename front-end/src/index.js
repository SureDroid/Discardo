/*
 * Copyright (c) 2019 SureDroid. Published under the GNU General Public Use License. See LICENSE.MD for more information.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const baseName = window.baseName;

ReactDOM.render(<BrowserRouter basename={baseName}><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
