import React, { Component } from "react";

class BulletPoints extends Component{

    render() {
        return (
            <div>
                {
                this.props.points.map( (point, index) => {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {point}
                        </p>
                    );
                })}
            </div>
        );
    }
}

export default BulletPoints;
