import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return <StarRating maxRating={10}/>;
}

export default App;
