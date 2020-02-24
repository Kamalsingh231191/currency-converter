import { ACTIONS } from './actions';

export let INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    let from, to;
    switch(action.type){
        case ACTIONS.LOAD_DATA:
            return Object.assign({}, state , action.data);
        case ACTIONS.ADD_TO_CONVERTER:
            return Object.assign({}, state,{
                currencies: state.currencies.map((currency,index) => {
                    if(Number(action.index) === index){
                        currency[action.key] = true;
                    }else{
                        currency[action.key] = false;
                    }
                    return currency;
                })
            });
        case ACTIONS.GET_EXCHANGE_RATE:
            //added IE polyfill for array.find
            from = state.currencies.find((currency) => currency.from );
            to = state.currencies.find((currency) => currency.to );
            return Object.assign({}, state ,{
                converter: {
                    ...state.converter,
                    from: from,
                    to: to,
                    exchangeRate: ((from, to) => {
                        return ( to / from ).toFixed(2)
                    })(from.index,to.index),
                    lastWeekHistory: ((fromHistory, toHistory) => {
                        return fromHistory.map((day,index) => {
                            if(fromHistory[index] && toHistory[index]){
                                return ( toHistory[index] / fromHistory[index] ).toFixed(7)
                            }else{
                                return 0;
                            }
                        })
                    })(from.lastWeek,to.lastWeek)
                }
            })
        case ACTIONS.GET_HISTORY:
            from = state.currencies.find((currency) => currency.from );
            to = state.currencies.find((currency) => currency.to );
            return Object.assign({}, state ,{
                converter: {
                    ...state.converter,
                    lastWeekHistory: ((fromHistory, toHistory) => {
                        return fromHistory.map((day,index) => {
                            if(fromHistory[index] && toHistory[index]){
                                return ( toHistory[index] / fromHistory[index] ).toFixed(7)
                            }else{
                                return 0;
                            }
                        })
                    })(from.lastWeek,to.lastWeek)
                }
            })
        case ACTIONS.TOGGLE_HISTORY:
            return Object.assign({},state, {
                converter: {
                    ...state.converter,
                    showHistory: !state.converter.showHistory
                }
            })
        default:
            return state;
    }
}
