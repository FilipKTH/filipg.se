import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';
import App from './app';
import './index.css';

render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));