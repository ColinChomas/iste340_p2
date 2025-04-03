import {useState, useEffect} from 'react';

import Accordion from 'react-bootstrap/Accordion';

import getData from '../../../util/GetData.js';

function MinorsAcc() {
    //state
    const [loaded, setLoaded] = useState(false);
    const [minors, setMinors] = useState();

    useEffect( () => {
        getData('minors/')
            .then((json) => {
                setMinors(json);
                setLoaded(true);
            })
    }
    , []);

    if (!loaded) return (<h1>...Loading Minors...</h1> )
    return (
        <>
            <h2>iSchool Minors</h2>
            <Accordion>
                {minors.UgMinors.map((m, index) =>
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{m.title}</Accordion.Header>
                        <Accordion.Body>
                            <p>{m.description}</p>
                            {m.courses && m.courses.length > 0 && (
                                <div>
                                    <h4>Coursework:</h4>
                                    <ul>
                                        {m.courses.map((c) => (
                                            <li key={c}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <h6>{m.note}</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </>
    )
}

export default MinorsAcc;