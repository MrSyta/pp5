import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Book extends Component {
    click = () => {
        //DESTRUCTURING
        const { id, name, genre, price } = this.props.books
        //PRZESYŁA DO KOSZYKA ETC
        // onClick={click()} do buttona
        console.log(this.props)
        console.log(`${id}, ${name}, ${genre}, ${price}`)
        //return nie działa, coś jeszcze z tym buttonem jest nie tak
    }

    render() {
        const { name } = this.props.books
        return (
            <div>
                <h2>{name}<span className="badge badge-secondary">New!!</span></h2>
                <button className="btn btn-success" onClick={this.click()}>Add to basket</button>
            </div>
            //<div style={style}>    
            //</div>
        )
    }
}

//PROPTYPES
Book.propTypes = {
    books: PropTypes.object.isRequired
}

//JSX - Dynamic styling could be used by providing a method instead of variable ex. style={this.getStyle()}
// const style = {
//     fontSize: 30,
//     padding: '5px',
//     borderBottom: '1px black dotted',
//     backgroundColor: 'lightblue',
//     float: 'right',
//     cursor: 'pointer'
// }

export default Book
