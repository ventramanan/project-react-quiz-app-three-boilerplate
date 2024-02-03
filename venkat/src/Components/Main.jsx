import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

export default function HomeComponent(){

  return(
    <div className="home">
      <h3 className="home-heading">Quiz App</h3>
      <Link to="/Quiz" className="home-bt">
        <button className="home-bt">Play</button>
      </Link>
    </div>
  )
}