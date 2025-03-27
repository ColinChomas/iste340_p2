//imports, css, any react state/hooks/other
// import React from 'react';
//React.useState()
import {useState, useEffect} from 'react';

//import components
import People from './components/People.jsx';
import BootAcc from './components/BootAcc.jsx';
import PeopleTabs from './components/PeopleTabs.jsx';

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
        console.log('worked', json);
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
        <div>...Menu Component</div>
      </div>
      <div className="App">
        <h1>Loading...</h1>
      </div>
    </>
  )

  return (
    <>
      <div className="stick">
        <h1>Welcome to the iSchool Website!</h1>
        <div>...Menu Component</div>
      </div>
      <div className="App">
        <div className="About">
          <h3>{aboutObj.title}</h3>
          <h6>{aboutObj.description}</h6>
          <div className="quote">{aboutObj.quote}</div>
          <h5>--{aboutObj.quoteAuthor}--</h5>
        </div>
        <hr/>
        <PeopleTabs/>
        {/* This is a comment, what the fuck. This is horrible. */}
        {/* first, lets build something to grab people. */}
        {/* <People /> */}
        <BootAcc/>
      </div>
    </>
  )
}

export default App