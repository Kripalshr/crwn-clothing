import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const PublishableKey = 'pk_test_51HXjfcF8iD8iZcZcN4KEnXcHjHXRmfowAnfadJtHJEuTjg3kZQ4rKb3CqkIwzPrCuU9DuZatQghmqpFjyI3wapCA003iGWUx1F';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabe='Pay Now'
            token={onToken}
            stripeKey={PublishableKey}
        />
    )
};

export default StripeCheckoutButton;