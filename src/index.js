import React from 'react';
import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);

