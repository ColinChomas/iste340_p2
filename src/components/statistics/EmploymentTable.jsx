import { useState, useEffect } from 'react';
import getData from '../../util/GetData.js';

const EmploymentTable = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();


    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json.employmentTable);
                setLoaded(true);

            })
    }, []);


    if (!loaded) return (<h1>...Loading Employment Table...</h1> )
    return (
        <>
            <h2>{stats.title}</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employer</th>
                        <th>Degree</th>
                        <th>City</th>
                        <th>Title</th>
                        <th>Start Date</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.professionalEmploymentInformation.map((d, index) => (
                        <tr key={index}>
                            <td>{d.employer}</td>
                            <td>{d.degree}</td>
                            <td>{d.city}</td>
                            <td>{d.title}</td>
                            <td>{d.startDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default EmploymentTable;