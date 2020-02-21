import React from 'react';
import { connect } from 'react-redux';
import { selectCurrency, getExchangeRate } from '../redux/actions'

class Currencies extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currencies: props.currencies
        }
        this.handleClickFrom = this.handleClickFrom.bind(this);
    }

    handleClickFrom(event){
        this.props.selectCurrency(event.target.value, event.target.id);
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
                    <div className="row">
                        <div className="col">
                            <select className="custom-select" id='from' onChange={this.handleClickFrom}>
                                {
                                    this.state.currencies.map((currency,index) => {
                                        if(!currency.to){
                                            return <option key={index} value={index} >{currency.name}</option>
                                        }
                                         return null;
                                    })
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select className="custom-select" id='to' onChange={this.handleClickFrom} >
                               {
                                   this.state.currencies.map((currency,index) => {
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