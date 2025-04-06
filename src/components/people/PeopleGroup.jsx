//imports
import PeopleModal from './PeopleModal.jsx';

const PeopleGroup = ({title, pepGroup}) => {
    return (
        <>
            <h3>{title}</h3>
            <div className="peopleList">
                {pepGroup.map( (p) =>
                    <div className="peopleListItem">
                        <img alt="person" src={p.imagePath}/>
                        {/* <h3>{p.name}</h3> */}
                        <PeopleModal prop={p}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default PeopleGroup;