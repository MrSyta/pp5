import React from 'react'
// import cart from '../../public/shopping-cart.svg'; 

export default function Basket() {
    return (
        <div style={basketStyle}>
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fshopping-and-commerce-outline%2F512%2FShopping_and_Commerce_-_Outline_26-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F3659030%2Fbasket_commerce_empty_shopping_shopping_basket_icon&docid=R0YH_ha1L1p4VM&tbnid=3qLrwtFuSsmvxM%3A&vet=10ahUKEwiKpJGn35fnAhXp0aYKHTXlCc8QMwhCKAAwAA..i&w=512&h=512&bih=831&biw=1685&q=basket%20icon&ved=0ahUKEwiKpJGn35fnAhXp0aYKHTXlCc8QMwhCKAAwAA&iact=mrc&uact=8'/>
        </div>
    )
}

const basketStyle = {
    textAlign: 'left',
}