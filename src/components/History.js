import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Graph from './Graph';
import { toggleHistory } from '../redux/actions';

class History extends React.Component{


    handleClick(){
        //update showHistory
        this.props.toggleHistory();

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <hr data-content="Past one week history" className="hr-text" />
                    </div>
                </div>
                <Button showHistory={this.props.showHistory} onClick={()=>this.handleClick()}/>
                <Graph showHistory={this.props.showHistory} data={this.props.data} from={this.props.from} to={this.props.to}/>
                <hr className="solid" />
            </div>
        );
    }

}

const mapStateToProp = (state)=>{
    let graphData =  state.converter.lastWeekHistory.map((value,index)=>{
        const d = new Date();
        return {
            x: new Date(d.setDate(d.getDate()- (7-index))),
            y: Number(value)
        }
    });
    return {
        showHistory: state.converter.showHistory,
        data: graphData,
        from: state.converter.from.name,
        to: state.converter.to.name
    }
}

export default connect(mapStateToProp,{ toggleHistory })(History);
