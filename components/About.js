import ReactDOM from 'react-dom';
import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open : false }
    }
    render() {

        return (
            <div className={ this.props.open ? 'about expanded' : 'about' }>
                <div className="about-header" onClick={ this.props.openClose }>
                    <span className={ this.props.open ? 'icon icon-cross close-x' : 'icon icon-cross' }>
                    </span>
                    <h2>
                        hello
                        <hr/>
                    </h2>
                </div>
                <div className="about-content">
                    <div className="col-xs-12 col-md-12 col-lg-4 about-links">
                        <img src="img/matt.png" />
                        <div className="links">
                            <a href="https://www.linkedin.com/in/russomatt/" target="blank_">
                                LinkedIn
                                <hr/>
                            </a>
                            <br/>
                            <a href="https://github.com/russomatt" target="blank_">
                                GitHub
                                <hr/>
                            </a> 
                            <br/>
                            <a href="../MatthewRussoCV.pdf" target="blank_">
                                CV
                                <hr/>
                            </a> 
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-8 about-text">
                        <p>
                        I am a designer/developer working in both pixels and front-end code, splitting my time between Amsterdam and Düsseldorf. I’m passionate about interactive experiences, data visualizations, and intuitive communication. 
                        <br/>
                        <br/>
                        I currently am finalizing my master’s degree in Computer Science & Information Engineering at Rhine Waal University. Before that, I worked as a designer/developer at <a href="http://bevspot.com" target="blank_">BevSpot</a> in Boston. My responsibilities included anything from implementing UI improvements that enhance customers' experiences to full-on new feature designs and standalone tools.
                        <br/>
                        <br/>
                        In 2016, I graduated with a BFA in Graphic Design & Interactive Media from Northeastern University. During my studies there, I completed a co-op as a junior front-end developer at <a href="http://yeti.co" target="blank_">Yeti</a> in San Francisco and on the digital creative team at <a href="http://wunderman.de" target="blank_">Wunderman</a> in Frankfurt.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12">
                    </div>
                </div>
            </div>
        );
    }
}

