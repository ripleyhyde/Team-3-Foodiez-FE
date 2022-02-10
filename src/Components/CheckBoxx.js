import React, { useState } from "react";
import dataRecipes from "../dataRecipes";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

function CheckBoxx(props) {
  const [Checked, setChecked] = useState([]);

  const handelToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };
  const RenderCheckboxList = () =>
    dataRecipes.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handelToggle(value)}
          type="checkbox"
          checked={Checked.indexOf(value) === -1 ? false : true}
        />
        <span>{value.ingredients}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header key="1">
          {RenderCheckboxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBoxx;
