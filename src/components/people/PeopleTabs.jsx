import {useState, useEffect} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PeopleGroup from './PeopleGroup.jsx';

import getData from '../../util/GetData.js';
import './People.css';

function PeopleTabs() {
  //state
  const [loaded, setLoaded] = useState(false);
  const [people, setPeople] = useState();
  
  useEffect( () => {
    getData('people/')
      .then((json) => {
        setPeople(json);
        setLoaded(true);
      })
  }, []);
  if (!loaded) return (<h1>...Loading People...</h1> )
  return (
    <>
      <h2>{people.title}</h2>
      <h4>{people.subTitle}</h4>
      <Tabs
        defaultActiveKey="faculty"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="faculty" title="Faculty">
          <PeopleGroup title="Faculty" pepGroup={people.faculty}/>
        </Tab>
        <Tab eventKey="staff" title="Staff">
          <PeopleGroup title="Staff" pepGroup={people.staff}/>
        </Tab>
      </Tabs>
    </>

  );
}

export default PeopleTabs;