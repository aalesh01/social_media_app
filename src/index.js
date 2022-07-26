import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom';
import {ChakraProvider } from '@chakra-ui/react'
=======
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider } from '@chakra-ui/react';

>>>>>>> a5a8cc4b9a1973c4e198b93a0a1c375857f5375c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider resetCSS={false}>
  <App />
  </ChakraProvider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
