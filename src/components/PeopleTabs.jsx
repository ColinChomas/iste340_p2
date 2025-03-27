import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import People from './People.jsx';

function PeopleTabs() {
  return (
    <Tabs
      defaultActiveKey="faculty"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="faculty" title="Faculty">
        Faculty
        <People faculty={true} />
      </Tab>
      <Tab eventKey="staff" title="Staff">
        Staff
        <People faculty={false} />
      </Tab>
    </Tabs>
  );
}

export default PeopleTabs;