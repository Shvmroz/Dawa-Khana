import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import { stripePublicKey } from './config'; // Your Stripe public key
import { LandingPage } from './Pages/LandingPage';
import './App.css'; // Import your CSS file

const stripePromise = loadStripe('pk_test_51HxmROCmTw5RHoXG8HKf8jNdtYJsQw5E1AlY22M325hFy8YkcGxBhuvlz0jF3oWyu3sVXpjOVcVJotmjXekYo9jA00EPrtjitS');

function App() {
  return (
    <div>
      <Elements stripe={stripePromise}>
      <LandingPage />
      </Elements>
    </div>
  );
}

export default App;
