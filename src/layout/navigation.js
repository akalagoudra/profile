import React, { Component } from "react";


class Navigation extends Component{
    render() {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#nav-wrap' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {
                        Object.keys(this.props.navigation).map( (navigationLink, index) => (
                            <Link
                            key={index}
                            link={navigationLink}
                            name={this.props.navigation[navigationLink]} />
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

class Link extends Component{
    render() {
        return (
            <li>
                <a className='smoothscroll' href={`#${this.props.link}`}>{this.props.name}</a>
            </li>
        );
    }
}

export default Navigation;
