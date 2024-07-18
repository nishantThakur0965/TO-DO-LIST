import { useState } from "react";
import TodoModal from "../todoModal";
import MenuItem from "./menuItem";
import "./style.css";
import { cloneList } from "../../../utils";

const TodoList = ({ list, setList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const doneTask = (id) => {
    const index = list.findIndex((item) => item.id === id);

    const doneTaskList = cloneList(list);

    if (doneTaskList[index].status === "active") {
      doneTaskList[index].status = "inactive";
    } else {
      doneTaskList[index].status = "active";
    }

    setList(doneTaskList);
  };

  // doneTask(id): Toggles the status of a task (active/inactive) by finding the task in the list and updating it.

  const deleteTask = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const deleteList = cloneList(list);

    deleteList.splice(index, 1);
    setList(deleteList);
  };

  // deleteTask(id): Deletes a task by finding it in the list and removing it.

  const editTask = ({ inputValues }) => {
    const index = list.findIndex((item) => item.id === itemSelected.id);
    const editTaskList = cloneList(list);

    editTaskList[index].title = inputValues.title;
    editTaskList[index].description = inputValues.description;

    setList(editTaskList);
    setIsModalOpen(false);
  };

  // editTask({ inputValues }): Edits a task by finding it in the list, updating its title and description, and closing the edit modal.

  return (
    <>
      <ul className="todoContent">
        {list.map((item, index) => (
          <li key={index} className="list">
            <span className={item.status === "inactive" ? "buttonDone" : ""}>
              {item.title}
            </span>

            <div className="todoContentButton">
              <div className="contentButton">
                <button className="button" onClick={() => doneTask(item.id)}>
                  {item.status === "inactive" ? (
                    <img src="/icons/tickicon.png" />
                  ) : (
                    <></>
                  )}
                </button>
              </div>

              <MenuItem
                deleteTask={deleteTask}
                item={item}
                setIsModalOpen={setIsModalOpen}
                setItemSelected={setItemSelected}
              />
            </div>
          </li>
        ))}
      </ul>

      <TodoModal
        mode="edit"
        list={list}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onChange={editTask}
        itemSelected={itemSelected}
      />
    </>
  );
};

export default TodoList;


//  the TodoList component is responsible for rendering and managing the to-do list. It displays each task, allows marking tasks as done, and provides options for editing and deleting tasks through a modal. The state variables isModalOpen and itemSelected control the visibility of the modal and store the currently selected task for editing. The component communicates with the parent component through the setList function to update the to-do list.