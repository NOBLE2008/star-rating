import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <StarRating showRating={false}/>
    </div>
  );
}

export default App;
