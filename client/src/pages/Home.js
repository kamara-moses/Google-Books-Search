import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Navbar from "../components/Navbar/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Input, SubmitBtn } from "../components/Search/Search";
import ResultList from "../components/ResultList/ResultList";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    search: "",
  };

  // Create function to search for books through Google API
  searchBooks = () => {
    API.googleBooks(this.state.search)
      .then((res) => {
        console.log("This is res.data", res.data.items);
        this.setState({
          books: res.data.items,
          search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  // Create function to handle input data
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Create function to handle form data submission
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks();
  };

  saveGoogleBook = (currentBook) => {
    console.log("This is the current book", currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch((err) => console.log("this is the error", err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Jumbotron />
          <form>
            <h5>Search for books</h5>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="e.g. Twilight"
            />
            <SubmitBtn onClick={this.handleFormSubmit} />
          </form>
          {this.state.books.length ? (
                    <ResultList 
                    bookState={this.state.books}
                    saveGoogleBook={this.saveGoogleBook}>
                    </ResultList>
                ) : (
                    <div>
                        <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                    </div>
                )}
        </Container>
      </div>
    );
  }
}

export default Home;
