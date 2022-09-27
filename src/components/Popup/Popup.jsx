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
      <Button variant="success" onClick={handleShow}>
        Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          {/* <Modal.Title className={styles.modalheading}> */}
          <h3 className={styles.modalheading}>Add Configuration</h3>
          {/* </Modal.Title> */}
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
    </>
  );
};

export default Popup;
