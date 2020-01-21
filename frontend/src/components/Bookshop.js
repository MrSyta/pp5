import React, { Component } from 'react'

export class Bookshop extends Component {
    render() {
        return this.props.books.map((books) => (
        <h3>{ books.name }</h3>
        ))
    }
}

export default Bookshop
