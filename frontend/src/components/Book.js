import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Book extends Component {

    click = () => {
        const { id, title, author, price } = this.props.books
        //console.log(this.props)
        console.log(`${id}, ${title}, ${author}, ${price}`)
        alert(`${title} added to cart!`)
    }

    render() {
        const { title, cover, description, price } = this.props.books
        return (
            <div className="card-decks" style={{display: 'inline', height: '25rem'}}>
                <div className="card" style={cardStyle} >
                    <img className="card-img-top" src={cover} alt="NO IMG" style={imgStyle} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}zł</p>
                        <button className="btn btn-success" onClick={this.click}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    width: '25rem',
    display: 'inline-block',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#e6e6e6',
    boxShadow: '3px 2px lightgrey'
}

const imgStyle = {
    marginTop: '2rem',
    width: 260,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column'
}

//PROPTYPES
Book.propTypes = {
    books: PropTypes.object.isRequired
}

//JSX - Dynamic styling could be used by providing a method instead of variable ex. style={this.getStyle()}

export default Book