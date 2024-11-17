import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <h1 className="title container">The Trips</h1>
      <div className="cardContainer container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
