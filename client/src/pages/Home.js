
import React, { Component } from "react";
import Navbar from "../components/Navbar/Nav";


class Home extends Component {

    state = {
        books: [],
        search: ""
    };


    // Create function to search for books through Google API
    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                books: res.data.items,
                search: ""
            })})
            .catch(err => console.log(err));
            
    };

    // Create function to handle input data
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // Create function to handle form data submission
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successful POST to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Navbar />
            
            </div>
        )
    }
}

export default Home