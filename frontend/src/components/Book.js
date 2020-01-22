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
        const { title, cover, description } = this.props.books
        return (
            <div className="card-decks" style={{display: 'inline', height: '25rem'}}>
            <div className="card" style={cardStyle} >
                <img className="card-img-top" src={cover} alt="IMG NOT WORKING" style={imgStyle} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-success" onClick={this.click()}>Add to basket</button>
                </div>
            </div>
            </div>
            
            // <div>    
            //     <h2>{title}</h2>
            //     <button className="btn btn-success" onClick={this.click()}>Add to basket</button>
            // </div>

            //<div style={style}>    
            //</div>
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
// const style = {
//     fontSize: 30,
//     padding: '5px',
//     borderBottom: '1px black dotted',
//     backgroundColor: 'lightblue',
//     float: 'right',
//     cursor: 'pointer'
// }

export default Book
