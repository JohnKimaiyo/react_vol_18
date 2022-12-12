import React from "react";

export default function Event() {
  const developerClick = () => {
    alert("Good moring React developer Kimaiyyo");
  };

  return (
    <div className="App">
      <button onClick={developerClick}>Click Me</button>
    </div>
  );
}
