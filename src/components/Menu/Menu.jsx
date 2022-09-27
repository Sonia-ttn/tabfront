import { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Menu.module.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Menu({ modalClose }) {
  const [type, setType] = useState(true);
  const [popularCheckbox, setPopularCheckbox] = useState(true);
  const [featuredCheckbox, setFeaturedCheckbox] = useState(true);
  const [sportData, setSportData] = useState([]);
  const [competiton, setCompetition] = useState([]);
  const [match, setMatch] = useState([]);
  const [tournament, setTournament] = useState([]);
  // const [market, setMarket] = useState([]);
  const [propositions, setPropositions] = useState([]);

  const handleRadioButton = (e) => {
    setType(e.target.checked);
  };

  const handlePopularCheckbox = (e) => {
    setPopularCheckbox(e.target.checked);
  };

  const handleFeaturedCheckbox = (e) => {
    setFeaturedCheckbox(e.target.checked);
  };

  useEffect(() => {
    getSportData();
  }, []);

  //Get Sport Data
  const getSportData = async () => {
    const res = await fetch(
      "https://api.congo.beta.tab.com.au/v1/tab-info-service/sports?jurisdiction=NSW"
    );
    const data = await res.json();
    setSportData(data.sports);
  };

  //Get Competition Data
  let sportId = null;
  let abc = null;
  const handleChange = (e) => {
    sportId = e.target.value;
    abc = sportData.find((element) => element.spectrumId === e.target.value);
    setCompetition(abc.competitions);
  };

  //Get the id of selected competition
  let competitionId = null;
  let matchUrl = null;
  let tournamentUrl = null;
  const handleCompetition = (e) => {
    competitionId = e.target.value;
    const competitionData = competiton.find(
      (element) => element.spectrumId === competitionId
    );
    matchUrl = competitionData._links.matches;
    tournamentUrl = competitionData._links.tournaments;
    getMatchOrTournamentData(competitionData);
  };

  //Get Match or Tournament Data
  const getMatchOrTournamentData = async (competitionData) => {
    if (competitionData.tournaments.length === 0) {
      const resForMatches = await fetch(`${matchUrl}`);
      const matchesData = await resForMatches.json();
      setMatch(matchesData.matches);
    } else {
      const resForTournament = await fetch(`${tournamentUrl}`);
      const tournamentsData = await resForTournament.json();
      setTournament(tournamentsData.tournaments);
    }
  };

  //Get the id of either selected match or tournament
  let uniqueId = null;
  let marketUrl = null;
  let mData = null;
  let tData = null;
  const handleMatch = (e) => {
    uniqueId = e.target.value;
    mData = match.find(
      (element) => element.spectrumUniqueId === parseInt(uniqueId)
    );
    tData = tournament.find((element) => element.spectrumId === uniqueId);
    marketUrl = mData == null ? tData._links.markets : mData._links.markets;
    getMarketData();
  };

  //Get Market Data
  const getMarketData = async () => {
    const res = await fetch(`${marketUrl}`);
    const data = await res.json();
    if (data.markets) {
      setPropositions(getPropositions(data.markets));
    } else {
      setPropositions(getPropositions(data.matches));
    }
  };

  function getPropositions(data) {
    const result = [];
    // console.log("data", data);
    data?.forEach((element) => {
      const { betOption, propositions } = element;
      if (propositions) {
        propositions.forEach((propelement) =>
          result.push({
            value: `${betOption} : ${propelement.name}`,
            label: `${betOption} : ${propelement.name}`,
            propId: propelement.id,
          })
        );
      } else {
        const { markets } = element;
        markets.forEach((marketelement) => {
          const { betOption, propositions } = marketelement;
          propositions.forEach((propelement) =>
            result.push({
              value: `${betOption} : ${propelement.name}`,
              label: `${betOption} : ${propelement.name}`,
              propId: propelement.id,
            })
          );
        });
      }
    });
    return result;
  }

  return (
    <>
      <Form>
        <div className={styles.radiobutton}>
          <span>Type</span>
          <Form.Check
            onClick={() => setType(true)}
            inline
            label="Popular"
            name="group1"
            type="radio"
            id="inline-radio-1"
            checked={type}
            onChange={handleRadioButton}
          />
          <Form.Check
            onClick={() => setType(false)}
            inline
            label="Featured"
            name="group1"
            type="radio"
            id="inline-radio-2"
          />
        </div>
        <div>
          <InputGroup className="mb-3">
            <div className={styles.menuheading}>
              Sport
              <Form.Select
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option>Sports</option>
                {sportData.map((sport) => {
                  const { spectrumId, name } = sport;
                  return (
                    <option value={spectrumId} key={spectrumId}>
                      {name}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </InputGroup>

          <InputGroup className="mb-3">
            <div className={styles.menuheading}>
              Competition
              <Form.Select
                aria-label="Default select example"
                onChange={handleCompetition}
              >
                <option>competitions</option>
                {competiton.map((competiton) => {
                  const { spectrumId, name } = competiton;
                  return (
                    <option value={spectrumId} key={spectrumId}>
                      {name}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </InputGroup>

          <InputGroup className="mb-3">
            <div className={styles.menuheading}>
              Match
              <Form.Select
                aria-label="Default select example"
                onChange={handleMatch}
              >
                <option>Match</option>
                {match.length !== 0
                  ? match.map((match) => {
                      const { spectrumUniqueId, name } = match;
                      return (
                        <option value={spectrumUniqueId} key={spectrumUniqueId}>
                          {name}
                        </option>
                      );
                    })
                  : tournament.map((tournament) => {
                      const { spectrumId, name } = tournament;
                      return (
                        <option value={spectrumId} key={spectrumId}>
                          {name}
                        </option>
                      );
                    })}
              </Form.Select>
            </div>
          </InputGroup>
        </div>

        {/* Type is popular or featured */}

        {type ? (
          <div className={styles.popular}>
            <div>
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
                  <Form.Check
                    type="checkbox"
                    className={`${styles.input} ${styles.checkbox}`}
                    checked={popularCheckbox}
                    onChange={handlePopularCheckbox}
                  />
                </Col>
              </Form.Group>
            </div>
          </div>
        ) : (
          <div>
            <InputGroup className="mb-3">
              <div className={styles.menuheading}>
                Propositions
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={propositions}
                  placeholder="Select Propositions"
                />
              </div>
            </InputGroup>
            {/* <Proposition propositionData={proposition} /> */}
            <Form.Group
              as={Row}
              // className="mb-2"
              controlId="formBasicCheckbox"
            >
              <Form.Label column sm="7" className={styles.label}>
                Enabled
              </Form.Label>
              <Col sm="5">
                <Form.Check
                  type="checkbox"
                  className={`${styles.input} ${styles.checkbox}`}
                  checked={featuredCheckbox}
                  onChange={handleFeaturedCheckbox}
                />
              </Col>
            </Form.Group>
          </div>
        )}
        <div className={styles.savebuttondiv}>
          <Button
            className={styles.savebutton}
            type="submit"
            onClick={modalClose}
          >
            Send
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Menu;
