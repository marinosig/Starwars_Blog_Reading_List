import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	console.log(store.people);
	const showPeople = store?.people[0]?.results.map((item, index) => {
		return (
			<div className="card" style={{ width: "17rem" }} key={index}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{item.name}</h4>
					<br></br>
					<a href={item.url} className="btn btn-primary">Go to the Link</a>
				</div>
			</div>)
	})

	const showPlanets = store?.planets[0]?.results.map((item, index2) => {
		return (
			<div className="card" style={{ width: "17rem" }} key={index2}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{item.name}</h4>
					<br></br>
					<a href={item.url} className="btn btn-primary">Go to the Link</a>
				</div>
			</div>)
	})

	const showStarships = store?.starships[0]?.results.map((item, index3) => {
		return (
			<div className="card" style={{ width: "17rem" }} key={index3}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h4 className="card-title">{item.name}</h4>
					<br></br>
					<a href={item.url} className="btn btn-primary">Go to the Link</a>
				</div>
			</div>)
	})

	return (
		<div className="container">
			<div><h3 style={{ color: "#b51616" }}> Characters </h3>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">
			{showPeople}
			</div>
			</div>
			<div><h3 style={{ color: "#b51616" }}> Planets </h3>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">
			{showPlanets}
			</div>
			</div>
			<div><h3 style={{ color: "#b51616" }}> Starships </h3>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">
			{showStarships}
			</div>
			</div>
			<br />
			<div className="row">
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			</div>
		</div>

	);
};
