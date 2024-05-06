import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Get card element
    const cardElement = elements.getElement(CardElement);

 
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Token:', token);
    }
  };

  return (
    <div>
      <div className='Card-form'>
        <form onSubmit={handleSubmit}>
          <CardElement/>
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};
