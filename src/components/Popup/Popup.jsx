import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Menu from "../Menu/Menu";
import styles from "./Popup.module.css";

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className={styles.addbutton}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h3 className={styles.modalheading}>Add Configuration</h3>
        </Modal.Header>
        <Modal.Body>
          <Menu />
        </Modal.Body>
        <Modal.Footer className={styles.modalfooter}>
          <Button
            variant="success"
            onClick={handleClose}
            className={styles.savebutton}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
