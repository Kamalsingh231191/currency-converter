import React from 'react';
import { connect } from 'react-redux';
import { selectCurrency, getExchangeRate } from '../redux/actions'

class Currencies extends React.Component {

    constructor(props){
        super(props);
        this.handleClickFrom = this.handleClickFrom.bind(this);
        this.swapCurrency = this.swapCurrency.bind(this);
    }

    handleClickFrom(event){
        this.props.selectCurrency(event.target.value, event.target.id);
        this.props.getExchangeRate();
    }

    swapCurrency(){
        let temp = document.getElementById("from").value;
        this.props.selectCurrency(document.getElementById("to").value,'from');
        this.props.selectCurrency(temp,'to');
        this.props.getExchangeRate();
    }

    render(){
        return(
            <form>
                <div className="container">
                    <hr className="solid"></hr>
                    <div className="row">
                        <div className="col text-center">
                            <hr data-content="Select Currency To Convert" className="hr-text"></hr>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-5">
                            <select className="custom-select" id='from' value={this.props.currencies.find((x)=> x.from).index} onChange={this.handleClickFrom}>
                                {
                                    this.props.currencies.map((currency,index) => {
                                        if(!currency.to){
                                            return <option key={index} value={index} >{currency.name}</option>
                                        }
                                         return null;
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-exchange" aria-hidden="true" onClick={this.swapCurrency}></i>
                        </div>
                        <div className="col-5">
                            <select className="custom-select" id='to' value={this.props.currencies.find((x)=> x.to).index} onChange={this.handleClickFrom} >
                               {
                                   this.props.currencies.map((currency,index) => {
                                       if(!currency.from){
                                           return <option key={index} value={index} >{currency.name}</option>
                                       }
                                       return null;
                                   })
                               }
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies
    };

}

const mapDispatchToProps = {
    selectCurrency,
    getExchangeRate
}

export default connect(mapStateToProps,mapDispatchToProps)(Currencies);