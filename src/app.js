import React from 'react';
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Banner from "./components/banner";
import ScrollDown from "./components/scrolldown";
import Section from "./section/page";

import resume from "./data/resume"
import './css/App.css';

export function Home(props) {

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
