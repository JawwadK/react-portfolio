import React, { Component } from 'react';
export default class Contactus extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for anything below
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eight columns footer-widgets">
                        <div className="widget">
                            <h4> LinkedIn:
                                {resumeData.linkedinId}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}