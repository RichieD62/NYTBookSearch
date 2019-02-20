import React, { Component } from 'react';
import $ from 'jquery';


class Search extends Component {

    constructor(props) {
        super(props)
        console.log("Initialized")
        this.state = {
        }
        this.performSearch("It")

    }



    performSearch(searchTerm) {
        console.log("Perform Search using google API")
        const urlString = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyA0f4cZytyn2H9ziSLyYeTpB2m7QWITprE&q=intitle:" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Successfully fetched data")
                console.log(searchResults)
                const results = searchResults.items



                var bookCards = []


                results.forEach((book) => {

                    const bookButtonStyle = {
                        float: "right",
                        marginRight: "15px"
                    }

                   
                    const card = <div key={book.id} className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text">{book.volumeInfo.description}</p>
                                    <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                    <a href={book.volumeInfo.infoLink} target="_blank"><small>Click here for more information</small></a>

                                </div>
                                <button style={bookButtonStyle} type="button" className="btn btn-success pull-right">Save</button>
                            </div>

                        </div>

                    </div>



                    bookCards.push(card)
                })

                this.setState({ cards: bookCards })

            },
            error: (err) => {
                console.log(err)
            }
        })

    }

    searchChangeHandler(event) {
        const searchTerm = event.target.value
        console.log(searchTerm)
    }

    updateSearchTerm(onClick) {
        console.log(event.target.value)
        const searchTerm = event.target.value
        this.performSearch(searchTerm)
    }

    render() {

        const searchStyle = {
            borderStyle: "solid",
            padding: "15px"
        }

        return (
            <div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div style={searchStyle} className="col-md-6">
                            <form>
                                <p>Book Search</p>
                                <div className="form-group">
                                    <label>Book</label>
                                    <input className="form-control" id="bookSearchBar" placeholder="Enter Book Title" onChange={this.updateSearchTerm.bind(this)} />
                                </div>

                                <button onClick={this.updateSearchTerm} type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>

                    </div>

                    <br />

                    <div className="row">
                        <div id="results" className="col-md-12">
                            {this.state.cards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search