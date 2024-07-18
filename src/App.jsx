import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <StarRating showRating={false} size={40}/>
    </div>
  );
}

export default App;
