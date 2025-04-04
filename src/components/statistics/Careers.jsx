import {useEffect, useState} from 'react';
import getData from '../../util/GetData.js';

const Careers = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();


    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json.careers);
                setLoaded(true);

            })
    }, []);


    if (!loaded) return (<h1>...Loading Careers...</h1> )
    return (
        <>
            <h2>{stats.title}</h2>
            {stats.careerNames.map((e) => (
                <div className="careerName">
                    <li>{e}</li>
                </div>
            ))}
        </>
    )
}