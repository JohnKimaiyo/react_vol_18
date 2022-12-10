import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Front Developer Kimaiyo" />
      <Title name="Front Developer Kimaiyo" />
      <Title name="Front Developer Kimaiyo" />
      <Myname/>
    </div>
  );
}

export default App;
