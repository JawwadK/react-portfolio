import React, { Component } from 'react';
export default class About extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}</p>
                    </div>
                    <div className="row">
                        <h2>Whats the deal with the url name?</h2>
                        <p>{resumeData.domainExplanation}</p>
                        <br></br>
                    </div>
                    

                    <div className="row">
                        <h2>Link to Official Resume</h2>
                        <a href={resumeData.resumeLink} target=""><i class={resumeData.resumeIconClassName}></i></a>
                    </div>
            </section>
        );
    }
}