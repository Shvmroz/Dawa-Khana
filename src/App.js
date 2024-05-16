import React from 'react';
import './App.css'; // Import your CSS file
import { RoutesFile } from './Routes/Routes';


// const stripePromise = loadStripe('pk_test_51HxmROCmTw5RHoXG8HKf8jNdtYJsQw5E1AlY22M325hFy8YkcGxBhuvlz0jF3oWyu3sVXpjOVcVJotmjXekYo9jA00EPrtjitS');

function App() {
  return (
    <div>
      {/* <Elements stripe={stripePromise}>
      <LandingPage />
      </Elements> */}
      <RoutesFile/>
    </div>
  );
}

export default App;
