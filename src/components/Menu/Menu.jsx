import Dropdown from "../Dropdown/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <InputGroup className="mb-3">
        <Dropdown />
      </InputGroup>

      <InputGroup className="mb-3">
        <Dropdown />
      </InputGroup>

      <InputGroup>
        <Dropdown />
      </InputGroup>
    </>
  );
}

export default Menu;
