import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Renderer } from './napchart-canvas/lib/index.js'

import { Stage } from "react-pixi-fiber";

class App extends Component {

  componentDidMount() {
    this.initializeChart()
  }

  render() {
    const height = 3000;
    const width = 3000;
    const OPTIONS = {
      backgroundColor: 0x1099bb
    };

    return (
    <div>
      <canvas className={"canvas " } width={0} height={0} ref={'asdf'}>
           A chart
         </canvas>
      <div style={{
        // position: 'absolute',
        // top: 0,
        width: '100vw',
          height: '100vh',
          border: 'solid 1px black'
        }}
        ref={parent => this.parent = parent}
          id="pixi"></div>
        </div>
    )
    // return (
    //   // <div style={{
    //   //   height: '100vh'
    //   // }} ref="resizer">
    //   //   <div style={{
    //   //     width: '90vw',
    //   //     height: '100vh'
    //   //   }}>
    //     
          
            
    //       {/* /* </div>
    //     </div>  
    //     <button style={{
    //       position: 'fixed',
    //       bottom: 0,
    //       right: 0,
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "rgba(0,0,0,0.02)",
    //       border: 'none',
    //       outline: 'none'
    //     }} onTouchEnd={this.next} onMouseUp={this.next}>next</button>
    //   </div> */ */}
    // );
  }

  next = () => {
    this.napchart.next()
  }

  initializeChart() {
    var canvas = this.refs['asdf']
    var ctx = canvas.getContext('2d')

    // first check if we should fetch some data
    // server.loadChart(this.props.onLoading, this.props.onLoadingFinish, (data') => {
    // returns {} if no data was loaded (you are on base napchart.com/)
    // returns the data if you are on napchart.com/xxxxx
    // console.log('☕️', this.props.initialData.chartData)
    var napchart = new Renderer({ container: this.parent, ctx })
    this.napchart = napchart
    // napchart.onUpdate = () => {
    //   // this.props.onUpdate()
    // }

    // for debugging
    window.napchart = napchart

    // canvas.oncontextmenu = function (event) {
    //   event.preventDefault()
    //   event.stopPropagation()
    //   return false
    // }

    // this.props.setGlobalNapchart(napchart)
  }
}

export default App;
