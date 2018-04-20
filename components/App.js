import ReactDOM from 'react-dom';
import React from 'react';
import data from '../data/projects.json';
import Tile from './Tile.js';
import About from './About.js';
import Project from './Project.js';
import Canvas from './Canvas.js';


export default class App extends React.Component {
    constructor(props) {
        super(props); 

        this.state = { projectOpen: false,
                        selectetProject: null,
                        filteredType: "all",
                        nodes: null,
                        aboutOpen: false}

    }
    toggleAbout = () => {

        var openState = !this.state.aboutOpen;

        this.setState({ aboutOpen : openState });
    }
    getTileNodes = () => {

        var that = this;

        var tileNodes = data.projects.map( function(project, i) {
                return (
                    <div className={ i > 2 ? 'col-xs-12 col-sm-6 col-md-4 col-lg-4' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 featured' } key={'tile-' + i}>
                        <div className='tile-container'>
                            <Tile
                                onClick={ that.openProject }
                                subTitle={ project.project.subTitle }
                                title={ project.project.title }
                                role={ project.project.role }
                                index={ i }
                            />
                        </div>
                        { i == 2 &&
                            <div className='featured-divider'>
                            </div>
                        }
                    </div>
                )
            });

        this.setState({nodes: tileNodes, filteredType: "all"})

    }

    filterTiles = (e) => {
        var that = this;

        console.log(e.target.dataset.type);

        if(e.target.dataset.type == this.state.filteredType || e.target.dataset.type == "all") {
            this.getTileNodes();

        } else {
            var tileNodes = data.projects.map( function(project, i) {
                if ( project.project.type == e.target.dataset.type) {
                    return (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                            key={'tile-' + i}>
                            <div className='tile-container'>
                                <Tile
                                    onClick={ that.openProject }
                                    subTitle={ project.project.subTitle }
                                    title={ project.project.title }
                                    role={ project.project.role }
                                    index={ i }
                                />
                            </div>
                        </div>
                    )
                }
            });

            this.setState({nodes: tileNodes, filteredType: e.target.dataset.type})

        }

    }
    openProject = (e) => {
        var idx = e.target.dataset.index;
        var project = data.projects[idx];

        document.getElementById('body').className = 'no-scroll';

        console.log();
        this.setState({
            projectOpen: true,
            selectedProject: project
        })
    }
    closeProject = () => {

        document.getElementById('body').className = '';

        this.setState({
            projectOpen: false,
            selectedProject: null
        })
  
    }
    componentWillMount() {
        this.getTileNodes();
    }
    render() {

        return (
            <div className={ this.state.projectOpen ? 'app-container app-overflow' : 'app-container'}>
                <div className="filters">
                    <div className="header">
                        <span className="col-xs-6 col-sm-4 name">russo, matt</span>
                        <span id="about" className="col-xs-6 col-sm-8">
                            <span className="about-label" onClick={ this.toggleAbout }>
                                about
                            </span>
                        </span>
                        <hr/>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <span onClick={ this.getTileNodes }
                            data-type="all"
                            className={ this.state.filteredType == 'all' ? 'filter selected-filter' : 'filter' }>
                            all
                            <hr
                                data-type="all"
                            />
                        </span>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <span onClick={ this.filterTiles }
                            data-type="interactive"
                            className={ this.state.filteredType == 'interactive' ? 'filter selected-filter' : 'filter'}>
                            interactive
                            <hr
                                data-type="interactive"
                            />
                        </span>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <span onClick={ this.filterTiles }
                            data-type="print"
                            className={ this.state.filteredType == 'print' ? 'filter selected-filter' : 'filter'}>
                            print
                            <hr
                                data-type="print"
                            />
                        </span>
                    </div>

                </div>
                { this.state.nodes }
                { this.state.projectOpen &&
                    <Project
                        closeProject={ this.closeProject }
                        project={ this.state.selectedProject.project }
                    />
                }
                <About
                open={ this.state.aboutOpen }
                openClose={ this.toggleAbout }/>
            </div>
        );
    }
}

