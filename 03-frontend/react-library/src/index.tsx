import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Nlr7TSI9gFQX59bkoeFhEIGPvokvbxlXvWKi7UeLDzuumuNBwV8KuUfdkMyfcPjeauoLq0Tt4tvxl6tepmPzMeL00JBm3OqeF');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);
