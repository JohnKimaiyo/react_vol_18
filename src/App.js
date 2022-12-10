import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
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
      <Mycount/>
    </div>
  );
}

export default App;
