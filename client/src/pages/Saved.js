import React, { Component } from 'react'
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from '../utils/API';

class Saved extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                
                </Container>
            </div>
        )
    }
}

export default Saved;