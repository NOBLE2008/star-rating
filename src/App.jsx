import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div>
      <StarRating maxRating={10} />
    </div>
  );
}

export default App;
