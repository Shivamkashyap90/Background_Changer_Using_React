import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full duration-200 h-screen"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-amber-400 bg-white px-3 py-1  rounded-full">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("maroon")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "maroon" }}
          >
            Maroon
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("lightblue")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "lightblue" }}
          >
            Lightblue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
