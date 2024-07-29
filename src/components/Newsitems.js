
// type "rce" and then press entre 
import React from 'react'

const Newsitems = (props) => {
    // LECTURE NUMBER 24
    let { title, description, imgurl, newsurl, author, date, source } = props; //so that jo humlog pass krenge usme se ye sab extract kr sake
    return (
        <div className="my-3">
            <div className="card" >
                <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ right: "0px", top: "0px", zIndex: "1" }}> {source} </span>
                <img src={!imgurl ? "https://www.hindustantimes.com/ht-img/img/2023/07/30/1600x900/anurag_1690725295805_1690725296138.jpg" : imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...
                        <span className="badge rounded-pill bg-info text-dark">New</span>
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="text-muted">By <b>{!author ? "Unknown" : author}</b> on {new Date(date).toGMTString()}</p>
                    <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitems
