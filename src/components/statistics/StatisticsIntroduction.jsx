import {useState, useEffect} from 'react';

import getData from '../../util/GetData.js';

function StatisticsIntroduction(){
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();

    useEffect( () => {
        getData('employment/')
            .then((json) => {
                setStats(json.introduction);
                setLoaded(true);

            })
    }
    , []);


    if (!loaded) return (<h1>...Loading Introduction...</h1> )
    return (
        <>
            <h2>{stats.title}</h2>
            {stats.content.map((c, index) => {
                <div eventKey={index.toString()}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                </div>

            })}
        </>
    )
}

export default StatisticsIntroduction;