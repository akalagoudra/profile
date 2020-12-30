import React, { Component } from 'react';
import About from './about';
import Work from './work';
import Education from './education';
import Skills from './skills';
import Portfolio from './portfolio';
import References from './references';
import Footer from '../layout/footer';

class Section extends Component{

    render() {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Education content={this.props.education}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <Footer content={this.props.basics}/>

            </div>
        );
    }
}

export default Section;
