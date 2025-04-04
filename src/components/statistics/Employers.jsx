import {useEffect, useState} from 'react';
import getData from '../../util/GetData.js';
import './Employers.css';


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
            <div className="employers">
                {stats.employerNames.map((e) => (
                        <div className="employerName">
                            <p>{e}</p>
                        </div>
                ))}
            </div>

        </>
    )
}

export default Employers;