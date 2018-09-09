import ReactDOM from 'react-dom';
import React from 'react';
import { getRandomInt } from '../utils/utils.js';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = { canvasNode : "", height: 0, width: 0};

    }
    drawCanvas = () => {
        var canvasContainer = document.getElementById('canvas-container');
        var h = canvasContainer.scrollHeight;
        var w = canvasContainer.scrollWidth;

        var canvasNode = (<canvas id="canvas" onClick={ this.drawBall } height={ h } width={ w }></canvas>)

        this.setState({ canvasNode: canvasNode,  height: h , width: w });

    }
    drawBall = () => {

        // alert('lol')
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var h = canvas.scrollHeight;
        var w = canvas.scrollWidth;

        var xcoord = getRandomInt(w);
        var ycoord = getRandomInt(h);

        var w2 = getRandomInt(15);
        var h2 = getRandomInt(15);

        var rect = {
          x: xcoord,
          y: ycoord,
          w: w2,
          h: h2,
          radius: 25,
          color: 'red',
          draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
          },
          draw2: function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
          }
        };

        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'white']
        var lol = 0;
        for( var i = 0; i < 5000; i++) {
            lol= lol + 1;

            if (lol == 6) {
                lol = 0;
            }

            xcoord = getRandomInt(w);
            ycoord = getRandomInt(h);

            w2 = getRandomInt(15);
            h2 = getRandomInt(15);

            rect.x = xcoord;
            rect.y = ycoord;

            rect.h = h2;
            rect.w = w2;
            rect.color = colors[lol];

            rect.draw2();
        }
        
    }
    ComponentDidMount() {
        // this.drawCanvas();
        // var canvasContainer = document.getElementById('canvas-container');
        // var h = canvasContainer.scrollHeight;
        // var w = canvasContainer.scrollWidth;

        // this.setState({ height: h , width: w });
    }
    render() {

        return (
            <div id="canvas-container" className="canvas" onClick={ this.drawCanvas }>
                { this.state.canvasNode }
            </div>
        );
    }
}

