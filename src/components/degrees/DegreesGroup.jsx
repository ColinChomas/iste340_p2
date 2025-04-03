import Accordion from 'react-bootstrap/Accordion';

const DegreesGroup = ({title, degGroup}) => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                {degGroup.map((d) => {
                    if (d.title) {
                        return (
                            <Accordion.Item eventKey={d.degreeName} key={d.degreeName}>
                                <Accordion.Header>{d.title}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{d.description}</p>
                                    {d.concentrations && d.concentrations.length > 0 && (
                                        <div>
                                            <h4>Concentrations:</h4>
                                            <ul>
                                                {d.concentrations.map((c) => (
                                                    <li key={c}>{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    } else {
                        return (
                            <Accordion.Item eventKey={d.degreeName} key={d.degreeName}>
                                <Accordion.Header>Graduate Certificates</Accordion.Header>
                                <Accordion.Body>
                                    {d.availableCertificates && d.availableCertificates.length > 0 && (
                                        <div>
                                            <h4>Available Certificates:</h4>
                                            <ul>
                                                {d.availableCertificates.map((c) => (
                                                    <li key={c}>{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    }
                })}
            </Accordion>
        </>
    )
}

export default DegreesGroup;