import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Front Developer Kimaiyo" />
      <Title name="Front Developer Kimaiyo" />
      <Title name="Front Developer Kimaiyo" />
    </div>
  );
}

export default App;
