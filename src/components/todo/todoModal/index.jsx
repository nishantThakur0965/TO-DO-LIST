import { useEffect, useState } from "react";
import "./style.css";

const TodoModal = ({
  mode = "add",
  isModalOpen,
  setIsModalOpen,
  onChange,
  itemSelected,
}) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });

  const staticData = {
    todoModalText: mode === "add" ? "NEW TASK" : "Edit task",
    todoModalBodyButton: mode === "add" ? " Add" : "Edit",
  };

  useEffect(() => {
    if (mode === "edit") {
      setInputValues({
        title: itemSelected.title,
        description: itemSelected.description,
      });
    }
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handelActionTask = () => {
    if (mode === "add") {
      onChange({ inputValues, setInputValues });
      return;
    }

    if (mode === "edit") {
      onChange({ inputValues });
    }
  };

  return (
    <div className={`todoModal ${isModalOpen ? "todoModalOpen" : ""}`}>
      <div className={`${isModalOpen ? "todoModalBody" : ""}`}>
        <div>
          <span
            className="todoModalClose"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </span>
          <p className="todoModalText">{staticData.todoModalText}</p>
        </div>

        <div className="todoModalBodyContent">
          <label className="todoModalBodyContentText">Title</label>
          <input
            className="todoModalBodyContentInput"
            name="title"
            value={inputValues.title || ""}
            onChange={handleChange}
          />

          <label className="todoModalBodyContentText">Description</label>
          <input
            className="todoModalBodyContentInputDescription"
            name="description"
            value={inputValues.description || ""}
            onChange={handleChange}
          />
        </div>

        <button className="todoModalBodyButton" onClick={handelActionTask}>
          {staticData.todoModalBodyButton}
        </button>
      </div>

      <div
        className="modalBackground"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </div>
  );
};

export default TodoModal;


// the TodoModal component is used for adding and editing to-do list items. It manages local state for input values, responds to changes in the modal's visibility, handles input changes, and communicates with the parent component using the onChange function. Depending on the mode prop, it displays the modal differently for "add" and "edit" modes.