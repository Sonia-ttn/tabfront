import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Menu.module.css";
import { useState } from "react";

function Menu() {
  const [type, setType] = useState(true);

  return (
    <>
      <Form>
        <div>
          <InputGroup className="mb-2">
            <div className={styles.menuheading}>
              Sport
              <Dropdown />
            </div>
          </InputGroup>

          <InputGroup className="mb-2">
            <div className={styles.menuheading}>
              Competition
              <Dropdown />
            </div>
          </InputGroup>

          <InputGroup>
            <div className={styles.menuheading}>
              Match
              <Dropdown />
            </div>
          </InputGroup>
        </div>

        <div className={styles.radiobutton}>
          <span>Type</span>
          <Form.Check
            onClick={() => setType(true)}
            inline
            label="Popular"
            name="group1"
            type="radio"
            id="inline-radio-1"
            // checked={type ? "yes" : "no"}
          />
          <Form.Check
            onClick={() => setType(false)}
            inline
            label="Featured"
            name="group1"
            type="radio"
            id="inline-radio-2"
            // checked={type ? "no" : "yes"}
          />
        </div>
        {type ? (
          <div className={styles.popular}>
            <div className={styles.popularcontent}>
              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Min No of Bets Placed
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="number" className={styles.input} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Min No of Legs
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="number" className={styles.input} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Max No of Legs
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="number" className={styles.input} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Min Price
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="number" className={styles.input} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-1"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Max Price
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="number" className={styles.input} />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                // className="mb-2"
                controlId="formBasicCheckbox"
              >
                <Form.Label column sm="7" className={styles.label}>
                  Enabled
                </Form.Label>
                <Col sm="5">
                  <Form.Check type="checkbox" className={styles.input} />
                </Col>
              </Form.Group>
            </div>
          </div>
        ) : (
          <div>featured</div>
        )}
      </Form>
    </>
  );
}

export default Menu;
