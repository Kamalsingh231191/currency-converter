import { ACTIONS } from './actions';

const INITIAL_STATE = {
    currencies: [
        {
          name: 'USD',
          index: 1,
          icon: 'fa fa-dollar',
          from:true,
          to:false,
          lastWeek:[1,1,1,1,1,1,1]
        },
        {
          name: 'EURO',
          index: 0.92,
          icon: 'fa fa-euro',
          from: false,
          to: true,
          lastWeek:[0.923,0.908,0.917,0.945,0.952,0.931,0.922]
        },
        {
          name: 'GBP',
          index: 0.77,
          icon: 'fa fa-gbp',
          from: false,
          to: false,
          lastWeek: [0.68,0.71,0.76,0.73,0.74,0.80,0.77]
        },
        {
          name: 'Bitcoin',
          index: 0.000100,
          icon: 'fa fa-bitcoin',
          from:false,
          to:false,
          lastWeek: [0.000107,0.000105,0.000111,0.000104,0.000113,0.000107,0.000100]
        },
        {
          name: 'INR',
          index: 71.53,
          icon: 'fa fa-rupee',
          from: false,
          to: false,
          lastWeek: [68.53,69.73,72.93,71.73,71.13,72.73,71.53]
        },
        {
          name: 'YEN',
          index: 109.87,
          icon: 'fa fa-yen',
          from: false,
          to: false,
          lastWeek: [104.57,101.87,106.87,112.87,111.87,108.34,109.87]
        },
        {
          name: 'TRY',
          index: 6.07,
          icon: 'fa fa-turkish-lira',
          from: false,
          to: false,
          lastWeek: [6.34,5.87,5.67,5.97,6.37,6.17,6.07]
        }
    ],
    converter: {
        from: {
            name: 'USD',
            index: 1,
            from:true,
            to:false
        },
        to:{
            name: 'EURO',
            index: 0.92,
            from: false,
            to: true
        },
        exchangeRate: 0.92,
        lastWeekHistory: [],
        showHistory: true
    }
};

export default (state = INITIAL_STATE, action) => {
    let from, to;
    switch(action.type){
        case ACTIONS.ADD_TO_CONVERTER:
            return Object.assign({}, state,{
                currencies: state.currencies.map((currency,index) => {
                    if(action.index == index){
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
