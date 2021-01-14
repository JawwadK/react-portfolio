import React, { Component } from 'react';
export default class About extends Component{
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}</p>
                    <div className="row">
                        <h2>Whats the deal with the url name?</h2>
                        <span>{resumeData.domainExplanation}</span>
                        <br></br>
                    </div>
                    
                    </div>
                    <div className="row">
                        <h2>Here is my official resume</h2>
                        <a href={resumeData.resumeLink} target=""><i class={resumeData.resumeIconClassName}></i></a>
                    </div>
            </section>
        );
    }
}