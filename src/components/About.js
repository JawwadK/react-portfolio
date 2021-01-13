import React, { Component } from 'react';
export default class About extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <h2>About Me</h2>
                    <p>
                        {
                            resumeData.aboutme
                        }
                    </p>
                    <div className="row">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>{resumeData.address}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <h2>Learn more about me via my resume</h2>
                    </div>
            </section>
        );
    }
}