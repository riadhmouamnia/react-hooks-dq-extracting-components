import React from "react";
import { messages, contacts } from "../data";
import SideNav from "./SideNav";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="app">
      <SideNav contacts={contacts} />
      <MainContent messages={messages} />
    </div>
  );
}

export default App;
