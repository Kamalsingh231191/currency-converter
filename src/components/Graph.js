import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Graph extends React.Component{

    render(){
        const options = {
              title: {
                text: ` ${this.props.from} to ${this.props.to} `
              },
              axisY:{
                      includeZero: false  //try changing it to true
                    },
              data: [{
                        type: "line",
                        dataPoints: this.props.data
               }]
           };
        let toggle = this.props.showHistory ? "collapse show":"collapse ";

        return(
            <div className="row">
                <div className="col">
                    <span className={toggle}><CanvasJSChart options={options} /></span>
                </div>
            </div>
        )
    }

}


