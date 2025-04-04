import {useEffect, useState} from 'react';
import getData from '../../util/GetData.js';


const Employers = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();


    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json.employers);
                setLoaded(true);

            })
    }, []);


    if (!loaded) return (<h1>...Loading Employers...</h1> )
    return (
        <>
            <h2>{stats.title}</h2>
            {stats.employerNames.map((e) => (
                <div className="employerName">
                    <li>{e}</li>
                </div>
            ))}
        </>
    )
}

export default Employers;