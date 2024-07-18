// libraries import kri hai aur external components add kre hai
import { useState } from "react";//adding hook
import { createId } from "../../../utils";//new task unique id
import TodoModal from "../todoModal";
import "./style.css"; //css file

const TodoAddTask = ({ setList }) => {//function to add task prop de raka hai eske andr
  const [isModalOpen, setIsModalOpen] = useState(false);// ek aur locl variable phle se false
  const addNewTask = ({ inputValues, setInputValues }) => {
    setList((prev) => [
      ...prev,
      { ...inputValues, status: "active", id: createId() },
    ]);

    setIsModalOpen(false);

    setInputValues({
      title: "",
      description: "",
    });
  };

  return (
    <> 
      <div className="todoBodyFooter">
        <button
          className="todoBodyFooterButton"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>

      <TodoModal
        mode="add"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onChange={addNewTask}
      />
    </>
  );
};

export default TodoAddTask;



// the TodoAddTask component is responsible for adding new tasks to the to-do list. It manages the visibility of the modal for adding tasks, and when a new task is added, it communicates with the parent component through the setList function and clears the input fields. The modal for adding tasks is a separate TodoModal component, which is configured in "add" mode and communicates with addNewTask to add the task to the list.
