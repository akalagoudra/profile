import React, { Component, useState } from 'react';


function Entry(props){
    let [style, setStyle] = useState({
        background: '#313131'
    });

    let handleMouseEnter = () => {
        return setStyle({
            background: '#11ABB0'
        })
    }

    let handleMouseLeave = () => {
        return setStyle({
            background: '#313131'
        });
    }

    return (
        <li>
            <span
                className={`bar-expand percentage${props.entry.level}`}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                style={style}/>
            <em>{props.entry.name}</em>
        </li>
    );
}

class Skill extends Component{
    render() {
        const summary = this.props.summary.map(function (point, index) {
            return (
                <p key={index} className='skill-summary'>{point}</p>
            );
        });
        return (
            <div className='row inside'>
                <h3>{this.props.title}</h3>
                {summary}
                <div className='bars'>
                    <ul className='skills'>
                        {
                        this.props.content.map( (entry, index) => {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

class Skills extends Component{
    render() {
        return (
            <section id='skill'>
                <div className='row skill'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.skills.map(function (skill, index) {
                            return (
                                <Skill
                                    key={index}
                                    title={skill.title}
                                    content={skill.skillDetails}
                                    summary={skill.description}/>
                            );
                        })}
                        {/*
                            <Skill title='Languages' content={this.props.content.languages}/>
                        */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
