import React from 'react';
import { connect } from 'react-redux';
import { getExchangeRate, toggleHistory } from '../redux/actions';

class Converter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            from: props.from,
            to: props.to,
            exchangeRate: props.exchangeRate
        }
    }

    componentDidMount(){
        //initialising values
        this.props.getExchangeRate();

    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center"><hr data-content="Converter" className="hr-text"></hr></div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="alert alert-info col-6 text-center well well-large" role="alert">
                        1 <i className={this.props.from.icon}></i> {this.props.from.name} = {this.props.exchangeRate} <i className={this.props.to.icon}></i> {this.props.to.name}
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.converter;
}

export default connect(mapStateToProps,{ getExchangeRate, toggleHistory })(Converter)

