import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import getData from '../../../util/GetData.js';
import CourseModal from '../../courses/CourseModal.jsx';
import './MinorsAcc.css';

function MinorsAcc() {
    // State for minors and courses
    const [loaded, setLoaded] = useState(false);
    const [minors, setMinors] = useState();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch minors data
        getData('minors/')
            .then((json) => {
                setMinors(json);
                setLoaded(true);
            });

        // Fetch courses data
        getData('course/')
            .then((json) => {
                setCourses(json);
            });
    }, []);

    if (!loaded) return (<h1>...Loading Minors...</h1>);

    // Helper function to find course details by courseID
    const findCourseDetails = (courseID) => {
        return courses.find((course) => course.courseID === courseID);
    };

    return (
        <>
            <h2 className="minorHeader">iSchool Minors</h2>
            <Accordion className="minorItem">
                {minors.UgMinors.map((m, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{m.title}</Accordion.Header>
                        <Accordion.Body>
                            <p>{m.description}</p>
                            {m.courses && m.courses.length > 0 && (
                                <div>
                                    <h4>Coursework:</h4>
                                    <ul>
                                        {m.courses.map((courseID) => {
                                            const courseDetails = findCourseDetails(courseID);
                                            return (
                                                <li key={courseID}>
                                                    {courseDetails ? (
                                                        <CourseModal course={courseDetails} />
                                                    ) : (
                                                        courseID // Fallback if course details are not found
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                            <h6>{m.note}</h6>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
}

export default MinorsAcc;