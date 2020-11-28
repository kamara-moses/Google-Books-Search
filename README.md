## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:
An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books. Users are notified of saving or deleting books from the db using Socket.io.

<img src="src/assets/img/googlebooks.png" alt="Google Books Search">

## Technologies:
- Bootstrap
- Node.js
- React
- React-Dom
- Materialize
- Axios
- ExpressJS
- Mongoose
- MongoDB
- jQuery

## Table of Contents
* [Description](#description)
* [Technologies](#topics)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Challenges](#challenges)
* [Questions](#questions)
* [License](#license)
* [Author](#Author)
* [Badges](#badges)

## Installation
Before installing this application on your local computer, ensure that you have Node, NPM and MongoDB installed globally on your machine. This application works in Node. You can go to the following website to download Node: <a href='https://nodejs.org/en/'>Node</a>

This is a react act application.

Installation:

    - clone the repo or download the zip file to your local machine
    - open repo in vscode or text editor of choice
    - npm install

To Start Server:

    - npm start

To Visit App:

    - localhost:3000

## How It Works
    1. Users are first directed to the Home page where they can search for any book. Book information is retrived via the publicly available Google Books API.

    2. Upon searching for a book, users will see a list of relevant results. They can click save to save the book to the Saved page. In the back end, the book is saved to the Mongo database.

    3. Users can save as many books as they want. If they then go to the Saved page, they'll not only see books that have been saved by them, but also previous visitor's saved books (it's basically a shared space of saved books).

    4. Upon clicking the save button, users will be notified that they saved a book with the title to the DB.

    5. In either the Home or Saved pages, a user can click on the View Book button. This will redirect them to the Google Books store page where they can either purchase or read a preview of the book.

    6. If a user wants to remove a saved book from the list, they may click the Delete button to remove the book from the page. In the back end, this deletes the document from the Mongo database.

    7. Upon clicking the delete button, users will be notified that they delete the book with the title of the DB.

![Google Books Search Demo](src/assets/img/google-books.gif)


## Contributors
This application is open to anyone who wants to contribute or enhance the application. If you would like to contribute please reach out to me on Github or email.

## Test
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Challenges


## Questions
If you have questions about this repository? Please contact me at [kamara.moses@yahoo.com](mailto:kamara.moses@yahoo.com). View more of my work in GitHub at [kamara-moses](https://github.com/kamara-moses).

## License
This repository is licensed under the MIT license.

Copyright (c) [2020] [Moses Kamara]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author 
![GitHub profile pic](https://avatars3.githubusercontent.com/u/65128951?v=4)
