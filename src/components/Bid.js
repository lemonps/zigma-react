import React, { useState } from "react";
import { Panel, Row, Col, Grid, Dropdown, Icon } from "rsuite";

const TxDetail = props => {
  // Get TxId
  const {
    match: { params }
  } = props;
  console.log(params);

  const [Interest, setInterest] = useState("");
  const handleSubmit = event => {
    alert("A name was submitted: " + Interest);
    event.preventDefault();
  };

  return (
    <Panel>
      <form onSubmit={handleSubmit}>
        <label>
          Interest:
          <input
            type="text"
            value={Interest}
            onChange={text => setInterest(text)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Panel>
  );
};

export default TxDetail;
