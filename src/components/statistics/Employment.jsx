
import StatisticsIntroduction from './StatisticsIntroduction.jsx';
import DegreeStatistics from './DegreeStatistics.jsx';
import Employers from './Employers.jsx';
import TableGroup from './TableGroup.jsx';
import './Employment.css';


function Employment(){

    return (
        <>
            <div className = "employment">
                <StatisticsIntroduction/>
                <DegreeStatistics/>
                <Employers/>
                <TableGroup/>
            </div>

        </>
    )
}

export default Employment;