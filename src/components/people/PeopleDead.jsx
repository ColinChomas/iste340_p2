import {useState, useEffect} from 'react';

import './People.css';
import getData from '../../util/GetData.js';

const People = (faculty) => {
    // const [getter, setter] = useState(init);
    const [people, setPeople] = useState();
    const [loaded, setLoaded] = useState(false);

    //go get data
    useEffect( () => {
        getData('people/')
            .then((json)=>{
                console.log('people got: ', json);
                setPeople(json);
                setLoaded(true);
            })
    }, [] );

    //render without the people data
    if (!loaded) return (
        <>
            <h1>Loading People Data...</h1>
        </>
    )

    if (faculty) return (
        <>
            <h1>{people.title}</h1>
            <h3>{people.subTitle}</h3>
            {/*how do we get all of the people to show? */}
            <div className="peopleList">
                {people.faculty.map((p) =>
                    <div className="peopleListItem">
                        <img src={p.imagePath} /*alt={p.name}*/ />
                        <h3>{p.name}</h3>
                    </div>
                )}

            </div>

        </>
    )

    if (faculty == false) return (
        <div className="peopleList">
        {people.staff.map((p) =>
            <div className="peopleListItem">
                <img src={p.imagePath} /*alt={p.name}*/ />
                <h3>{p.name}</h3>
            </div>
        )}

        </div>
    )
}


export default People;