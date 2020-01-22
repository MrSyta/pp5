import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

export class Bookshop extends Component {
    render() {
        return this.props.books.map((books) => (
            <Book key={books.id} books={books}/>
        ))
    }
}

//PROPTYPES
Bookshop.propTypes = {
    books: PropTypes.array.isRequired
}

export default Bookshop
 