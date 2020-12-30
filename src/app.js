import React from 'react';
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Banner from "./components/banner";
import ScrollDown from "./components/scrolldown";
import Section from "./section/page";
import resume from "./data/resume"

import './css/App.css';

export function Home(props) {
  // let resume = JsonDump(props.config.resumePath)
  // const [data, setData] = useState({})
  // console.log("Home before set called" + data)
  // const getData = () => {
  //     fetch(props.config.resumePath, {
  //         headers : {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //         }
  //     })
  //       .then(function(response){
  //         console.log("json dump " + response)
  //         return response.json();
  //       })
  //       .then(function(myJson) {
  //         console.log("Set json" + myJson);
  //         setData(myJson)
  //       });
  // }

  // useEffect( () => {
  //   getData()
  // }, [])

  return (
      <div className="main-container">
          <Header>
              <Navigation navigation={props.config.navigation}/>
              <Banner basics={resume.basics} />
              <ScrollDown />
          </Header>
          <Section
              basics={resume.basics}
              work={resume.work}
              education={resume.education}
              skills={resume.skills}
              languages={resume.languages}
              portfolio={resume.projects}
              references={resume.references}/>
      </div>
  );
}
