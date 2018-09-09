import ReactDOM from 'react-dom';
import React from 'react';
import TileImage from './TileImage.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    tileHover = () => {
        this.style.background = 'red';
    }

    render() {

        return (
            <div onClick={ this.props.onClick }
                onMouseEnter={ this.tileHover }
                data-index={ this.props.index }
                data-type={ this.props.type }
                className="tile"
                >
                <div className="tile-screen"
                    data-index={ this.props.index }
                />
                <TileImage
                    index={ this.props.index }
                    url={ 'url(img/tile' + (this.props.index + 1) + '.png)' }
                />
                <div className="tile-info">
                    <div className="tile-role">
                        { this.props.role }
                    </div>
                    <h1>
                        { this.props.title }
                        <hr/>
                    </h1>
                    <br/>
                    <h1 className={ this.props.subTitle ? '' : 'hidden' }>
                        { this.props.subTitle }
                        <hr className="sub-rule"/>
                    </h1>
                </div>
            </div>
        );
    }
}

