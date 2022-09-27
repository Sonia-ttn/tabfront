import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import { MdEdit, MdDelete } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Menu from "../Menu/Menu";
import Button from "react-bootstrap/Button";

const Nonedit = ({ info, i }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (e) => {
    setShow(true);
  };

  return (
    <tr key={i}>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className={styles.check}>
        <input type="checkbox" />
      </td>
      <td>
        <span>
          <button className={styles.space1} onClick={handleEdit}>
            <MdEdit />
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <h3 className={styles.modalheading}>Add Configuration</h3>
            </Modal.Header>

            <Modal.Body>
              <Menu />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          <button className={styles.space2}>
            <MdDelete />
          </button>
        </span>
      </td>
    </tr>
  );
};

export default Nonedit;
