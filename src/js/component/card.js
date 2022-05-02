import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
    return (
     <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">Name of the people</h4>
                    <h5 className="card-subtitle">Gender</h5>
                    <h5 className="card-subtitle">Hair Color</h5>
                    <h5 className="card-subtitle">Eye-Color</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}


