import React, { Component } from 'react';
export default class Contactus extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Below is my contact info, lets get a coffee and connect.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eight columns footer-widgets">
                        <div className="widget">
                            <h4> Name: &nbsp; {resumeData.name} </h4>
                            <br></br>
                            <h4> Address: &nbsp; {resumeData.address}</h4>
                            <br></br>
                            <h4> Email: &nbsp; {resumeData.email}</h4>
                            <br></br>
                            <h4> LinkedIn: &nbsp;
                                {resumeData.linkedinId}
                            </h4>
                            <h4> Github: &nbsp;
                                {resumeData.githubId}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}