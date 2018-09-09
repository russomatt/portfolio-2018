import ReactDOM from 'react-dom';
import React from 'react';


export default class TileImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tile-image"
                data-index={ this.props.index }
                style={ {background: this.props.url}}
            >
            </div>
        );
    }
}
