import ReactDOM from 'react-dom';
import React from 'react';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(function(){
            document.getElementById('openproject').className = 'project project2'
        }, 100);
    }

    render() {
        var imgNodes = this.props.project.img != undefined ?
        this.props.project.img.map( function(img, i){
            return (
                <div key={"img-"+i} className="col-xs-12 col-sm-10 col-sm-offset-1 project-image">
                    <img src={ img }/>
                </div> );

        }) : "";

        var that = this;

        var parseDescription = function() {
            if( that.props ) {
                var arr = that.props.project.description.split('|');
                var elArray = [];
                var linkKey = 0;
                var brKey = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].indexOf('*') >= 0) {
                        linkKey = linkKey + 1;
                        var linkArr = arr[i].split('*'); 
                        elArray.push((<a key={ 'link-' + linkKey } href={ linkArr[0] } target="blank_">{ linkArr[1] }</a>));
                    } else if (arr[i].indexOf('~') >= 0) {
                        brKey = brKey + 1;
                        var brArr = arr[i].split('~');
                        elArray.push(brArr[0]);
                        elArray.push((<span key={ 'break-' + brKey }><br/><br/></span>));
                        elArray.push(brArr[1]);
                    } else {
                        elArray.push( arr[i] );
                    }
                }
                return elArray;
            } else return "";
        }
        var descArr = parseDescription();

        return (
            <div id="openproject" className="project">
                <div onClick={ this.props.closeProject } className="project-screen"/>
                <div onClick={ this.props.closeProject } className="close-project">
                    <span className="icon icon-cross">
                    </span>
                </div>
                <div className="project-container">
                    <div className="">
                        <div className="project-header" style={ {background: "url('" + this.props.project.bg + "')"} }>
                        </div>
                    </div>
                    <div className="project-copy">
                        <h1>
                            { this.props.project.title }
                            <hr/>
                        </h1>
                        <br/>
                        <h1 className={ this.props.project.subTitle ? '' : 'hidden' }>
                            { this.props.project.subTitle }
                            <hr className="sub-rule"/>
                        </h1>
                        <br/>
                        <p>
                         { descArr }
                        </p>
                        <div>
                            <span onClick={ this.props.closeProject } className="project-back">
                                <span className="icon icon-arrow-left2">
                                </span>
                                <span className="back-text">
                                    Close Project
                                </span>
                            </span>
                        </div>
                    </div>
                    { imgNodes }
                </div>
            </div>
        );
    }
}