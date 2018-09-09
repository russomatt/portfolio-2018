import ReactDOM from 'react-dom';
import React from 'react';


export default class TileImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    imageLoaded = () => {
        this.setState({ loaded: true});
    }

    render() {
        return (
            <div className={ this.state.loaded ? "tile-image" : "tile-image loading" }
                data-index={ this.props.index }
            >
            <img src={ this.props.url}
                className={ this.state.loaded ? "loaded" : "loading" }
                onLoad={ this.imageLoaded }
                data-index={ this.props.index }/>
            </div>
        );
    }
}
