import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //inputを変更する
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //TODoを未完了リストに追加する。
  const onClickAdd = () => {
    //inputが空文字の場合、処理しない
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //TODO削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //TODO完了
  const onClickComplete = (index) => {
    //新未完了リストデータ生成
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    //新完了リストデータ生成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    //各データをセット
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  // TODOを戻す
  const onClickBack = (index) => {
    //新完了リストデータ生成
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    //新未完了リストデータの生成
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    //各データをセット
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  // return <div></div>;
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
