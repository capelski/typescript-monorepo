import { nanoid } from "nanoid";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const getId = () => {
  return nanoid();
};

const container = document.getElementById("app-placeholder")!;
const root = createRoot(container);

const App: React.FC = () => {
  const [id, setId] = useState("-");

  return (
    <div>
      <button
        onClick={() => {
          setId(getId());
        }}
        type="button"
      >
        Generate
      </button>
      <p>{id}</p>
    </div>
  );
};

root.render(<App />);
