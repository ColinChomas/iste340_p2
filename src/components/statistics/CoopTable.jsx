import { useState, useEffect } from 'react';
import getData from '../../util/GetData.js';

const CoopTable = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();

    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json.coopTable);
                setLoaded(true);
            });
    }, []);

    if (!loaded) return (<h1>...Loading Coop Table...</h1>);
    return (
        <>
            <h2>{stats.title}</h2>
            <table className="coopTable">
                <thead>
                    <tr>
                        <th>Employer</th>
                        <th>Degree</th>
                        <th>City</th>
                        <th>Term</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.coopInformation.map((d, index) => (
                        <tr key={index}>
                            <td>{d.employer}</td>
                            <td>{d.degree}</td>
                            <td>{d.city}</td>
                            <td>{d.term}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CoopTable;