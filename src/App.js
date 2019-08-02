import React, { Fragment } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import GlobaStyled from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobaStyled />
      <Header />
      <Board />
    </DndProvider>
  );
}

export default App;
