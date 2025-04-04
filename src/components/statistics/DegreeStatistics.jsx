import {useState, useEffect} from 'react';

import getData from '../../util/GetData.js';

function DegreeStatistics() {
    //state 
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();

    useEffect( () => {
        getData('employment/')
            .then((json) => {
                setStats(json.degreeStatistics);
                setLoaded(true);

            })
    }
    , []);

    if (!loaded) return (<h1>...Loading Degree Statistics...</h1> )
    return (
        <>
            <h2>{stats.title}</h2>
            {stats.statistics.map((s) => (
                <div className="degreeStat">
                    <h3>{s.value}</h3>
                    <h5>{s.description}</h5>
                </div>
            ))}
        </>
    )
}

export default DegreeStatistics;