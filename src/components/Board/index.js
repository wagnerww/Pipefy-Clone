import React, { useState } from "react";
import produce from "immer";

import BoardContext from "./context";

import { loadLists } from "../../services/api";

import { Container } from "./styled";
import List from "../List";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to, fromList, ToList) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[ToList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
