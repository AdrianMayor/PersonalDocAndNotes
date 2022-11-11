import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Recomendaciones from "./Recomendaciones/Recomendaciones";

const View2 = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Recomendaciones></Recomendaciones>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Coming soon
      </Tab>
    </Tabs>
  );
};

export default View2;
