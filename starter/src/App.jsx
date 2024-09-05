import { useState } from "react";
import "./App.css";
import TailwindTest from "./TailwindTest";
import UseState from "./UseState";

function App() {
  const [background, setBackground] = useState("slate");
  const colors = ["red", "green", "blue", "orange"];

  return (
    <div
      className="bg-slate-900 rounded-md"
      style={{ backgroundColor: background }}>
      <UseState />
      <TailwindTest />
      <div className="flex gap-5 justify-center py-5">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setBackground(color)}
            className={` text-white px-3 py-2 rounded-md`}
            style={{ backgroundColor: color }}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
