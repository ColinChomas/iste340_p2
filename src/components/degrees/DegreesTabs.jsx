import {useState, useEffect} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DegreesGroup from './DegreesGroup.jsx';

import getData from '../../util/GetData.js';
import './Degrees.css';

function DegreesTabs() {
    //state
    const [loaded, setLoaded] = useState(false);
    const [degrees, setDegrees] = useState();

    useEffect( () => {
        getData('degrees/')
            .then((json) => {
                setDegrees(json);
                setLoaded(true);
            })
    }
    , []);
    if (!loaded) return (<h1>...Loading Degrees...</h1> )
    return (
        <>
            <h1>iSchool Degrees</h1>
            <Tabs
                defaultActiveKey="undergraduate"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="undergraduate" title="Undergraduate">
                    <DegreesGroup title="Undergraduate" degGroup={degrees.undergraduate}/>
                </Tab>
                <Tab eventKey="graduate" title="Graduate">
                    <DegreesGroup title="Graduate" degGroup={degrees.graduate}/>
                </Tab>
            </Tabs>
        </>
    )
}

export default DegreesTabs;