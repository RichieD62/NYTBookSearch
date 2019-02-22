import React, { Component } from 'react';
import $ from 'jquery';


class Saved extends Component {

    constructor(props) {
        super(props)
        console.log("Initialized")
        this.state = {
        }
        this.deleteFromDb = this.deleteFromDb.bind(this)

    }

    deleteFromDb() {
        $.ajax({
            method: "DELETE",
            url: "/:id",
            
        })
    }

    getFromDb() {
        $.ajax({
            method: "GET",
            url: "/saved",
            success: (returnData) => {
                console.log("Successfully fetched data from MongoDB")
                const results = returnData.items



                var bookCards = []


                results.forEach((book) => {

                    const bookButtonStyle = {
                        float: "right",
                        marginRight: "15px"
                    }


                    const card = <div key={book.id} className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''} className="card-img" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text">{book.volumeInfo.description}</p>
                                    <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                    <a href={book.volumeInfo.infoLink} target="_blank"><small>Click here for more information</small></a>



                                </div>
                                <button onClick={() => this.deleteFromDb(book)} style={bookButtonStyle} type="button" className="btn btn-danger pull-right">Delete</button>
                            </div>

                        </div >

                    </div >

                    console.log(book.volumeInfo.infoLink)

                    bookCards.push(card)
                })

                this.setState({ cards: bookCards })

            },
            error: (err) => {
                console.log(err)
            }
        })

    }



    render() {

        const bookButtonStyle = {
            float: "right",
            marginRight: "15px",
            marginBottom: "15px"
        }

        //     const itCard = <div key={1} className="card mb-3" >
        //     <div className="row no-gutters">
        //         <div className="col-md-4">
        //             <img src={''} className="card-img" alt="" />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">{'It'}</h5>
        //                 <p className="card-text">{'Now a major motion picture Stephen King’s terrifying, classic #1 New York Times bestseller, “a landmark in American literature” (Chicago Sun-Times)—about seven adults who return to their hometown to confront a nightmare they had first stumbled on as teenagers…an evil without a name: It. Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real. They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers. Readers of Stephen King know that Derry, Maine, is a place with a deep, dark hold on the author. It reappears in many of his books, including Bag of Bones, Hearts in Atlantis, and 11/22/63. But it all starts with It. “Stephen King’s most mature work” (St. Petersburg Times), “It will overwhelm you… to be read in a well-lit room only” (Los Angeles Times).'}</p>
        //                 <p className="card-text"><small className="text-muted">{'Stephen King'}</small></p>
        //                 <a href={'https://play.google.com/store/books/details?id=-rUACwAAQBAJ&source=gbs_api'} target="_blank"><small>Click here for more information</small></a>

        //             </div>
        //             <button style={bookButtonStyle} type="button" className="btn btn-danger pull-right">Delete</button>
        //         </div>

        //     </div>

        // </div>



        return (
            <div>
                <br />
                <vr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {itCard}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved