import React, { Component } from 'react';
import './css/style.css';
import * as d3 from 'd3';
//import './css/bootstrap.min.css';
import App from './App';
import ChordDiagram from 'react-chord-diagram';










class Chord extends Component {



constructor(){
    super()
    this.state = {
      matrix:[],
      labels:[]
    }
  }

componentWillMount(){
        return fetch('https://api.myjson.com/bins/rjd0r')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
         matrix:responseJson.data.chordMatrix,
         labels:responseJson.data.chordLabel
         
        })})


    
  }

render() {
	return (
		<div>

		<ChordDiagram
                   matrix={this.state.matrix}
                   componentId={0}
                   width={950}
                   height={620}
                   style={{fontFamily: '10px sans-serif'}}
                   groupLabels={this.state.labels}
                   groupColors={['#99677B','#362F2A','#7B68EE','#FFFF00','#FF0000','#98FB98','#800000','#000000','#00FFFF','#C0C0C0']} />
         



               </div>

		);
       }
}

export default Chord;

















