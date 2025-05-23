//imports, css, any react state/hooks/other
// import React from 'react';
//React.useState()
import {useState, useEffect} from 'react';

//import components
//import People from './components/People.jsx';
// import BootAcc from './components/BootAcc.jsx';
import PeopleTabs from './components/people/PeopleTabs.jsx';
import DegreesTabs from './components/degrees/DegreesTabs.jsx';
import MinorsAcc from './components/degrees/minors/MinorsAcc.jsx';
import Employment from './components/statistics/Employment.jsx';
import NavBar from './components/navbar/NavBar.jsx';

//get the css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//get my utils
import getData from './util/GetData.js'; // .js not required, just nice for human readability

const App = () => {
  //set up my state vars
  //const [var, setVar] = useState(init);
  const [loadAbout, setLoadAbout] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  useEffect(() => {
    getData('about/')
      .then((json) => {
        // console.log('worked', json);
        //load the data into the object
        setAboutObj(json);
        //flip the bit on loaded
        setLoadAbout(true);
      })
  }, []);

  if(!loadAbout) return (
    <>
      <div className="stick">
        <h1>Welcome to the iSchool Website!</h1>
        <div></div>
      </div>
      <NavBar/>
      <div className="App">
        <h1>Loading...</h1>
      </div>
    </>
  )

  return (
    <>
      <div id="home" className="stick">
        <h1 >Welcome to the iSchool Website!</h1>
        <div></div>
      </div>
      <NavBar/>
      <div className="App">
          <div className="About">
            <h3>{aboutObj.title}</h3>
            <h6>{aboutObj.description}</h6>
            <div className="aboutQuote">{aboutObj.quote}</div>
            <h5>--{aboutObj.quoteAuthor}--</h5>
          </div>
        <hr id="degrees" />
        <DegreesTabs id="degrees"/>
        <hr id="minors"/>
        <MinorsAcc id="minors"/>
        <hr id="employment"/>
        <Employment/>
        <hr id="people"/>
        <PeopleTabs/>
      </div>
    </>
  )
}

export default App