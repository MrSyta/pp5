import React from 'react'
// import cart from '../../public/shopping-cart.svg'; 

export default function Cart() {
    return (
        <div style={cartStyle}>
            <a href="../"> <img src={'../../public/shopping-cart.svg'} alt='Cart'/> </a>
        </div>
    )
}

function img() {
    // Import result is the URL of your image
    return <img src={'../../public/shopping-cart.svg'} alt="Logo" />;
  }

const cartStyle = {
    textAlign: 'left',
    marginLeft: '0.5rem',
    cursor: 'pointer'
}