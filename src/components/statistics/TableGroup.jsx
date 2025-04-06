import Table from './Table.jsx';
import getData from '../../util/GetData.js'; // .js not required, just nice for human readability
import { useState, useEffect } from 'react';
import './TableGroup.css';

const TableGroup = () => {
    //state
    const [loaded, setLoaded] = useState(false);
    const [stats, setStats] = useState();


    useEffect(() => {
        getData('employment/')
            .then((json) => {
                setStats(json);
                setLoaded(true);

            })
    }, []);


    if (!loaded) return (<h1>...Loading Tables...</h1> )
    return (
        <>
            <h3>Tables</h3>
            <div className ="table-group">
                <Table data={stats.coopTable} datakey="coopInformation"/>
                <Table data={stats.employmentTable} datakey="professionalEmploymentInformation"/>
            </div>
        </>
    )
}

export default TableGroup;