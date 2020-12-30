import React, { Component } from "react";


export default class Header extends Component {
    render() {
        return (
            <header id='home' >
                {this.props.children}
            </header>
        );
    }
}
