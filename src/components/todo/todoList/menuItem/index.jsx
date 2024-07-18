import { useState } from "react";
import "./style.css";

const MenuItem = ({ deleteTask, item, setIsModalOpen, setItemSelected }) => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  return (
    <>
      <div className={isMenu ? "activeMenu" : "openMenu"}>
        <img
          src="/icons/editTask.png"
          onClick={() => {
            setIsModalOpen(true);
            setItemSelected(item);
          }}
          className="menuItemButton"
        />

        <img
          src="/icons/deleteTask.png"
          onClick={() => deleteTask(item.id)}
          className="menuItemButton"
        />
      </div>

      <img
        src={`${!isMenu ? "/icons/more.png" : "/icons/close.png"}`}
        className="menuItem "
        onClick={() => handleMenu(true)}
      />
    </>
  );
};

export default MenuItem;


// the MenuItem component is used to render a menu with "Edit" and "Delete" options for a to-do list item. It manages the visibility of the menu using local state (isMenu) and responds to user interactions to trigger actions such as editing, deleting, and toggling the menu's visibility. The component communicates with the parent component by calling the provided functions (deleteTask, setIsModalOpen, and setItemSelected).
