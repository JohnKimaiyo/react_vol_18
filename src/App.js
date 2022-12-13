import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
import Users from "./component/Users";
import Event from "./component/Event";
import Range from "./component/Range";
import InputFocus from "./component/InputFocus";
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
      <Users/>
      <Event/>
      <Range/>
      <InputFocus/>
    </div>
  );
}

export default App;
