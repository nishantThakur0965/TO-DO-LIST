import { useEffect, useState } from "react";
import { TodoAddTask, TodoList } from "../../components/todo";
import "./style.css";

const Todo = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );

  // Initializes the list state variable using the useState hook. This state will store the to-do items.
// It attempts to retrieve data from local storage using localStorage.getItem("todo_list"). If this data exists in local storage, it is parsed using JSON.parse(). If the data doesn't exist, an empty array is used as the initial value.

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(list));
  }, [list]);

  // The useEffect hook is used to handle side effects. In this case, it synchronizes the list state with local storage whenever list changes.
  // The effect runs whenever list is modified (as specified in the dependency array [list]). It stores the current value of list in local storage under the key "todo_list".

  return (
    <div className="todoContainer">
      <div className="todoBody">
        <div className="todoBodyTitle">
          <p>TO-DO</p>
        </div>
        <TodoList list={list} setList={setList} />

        <TodoAddTask setList={setList} />
      </div>
    </div>
  );
};

export default Todo;


// this code sets up a simple to-do list application in React. It initializes the to-do list state with data from local storage, syncs changes to local storage, and provides a user interface for displaying and adding to-do tasks. The custom components TodoList and TodoAddTask handle the specific functionality related to the list itself and task addition.