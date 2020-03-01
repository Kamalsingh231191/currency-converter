import { ACTIONS, loadData, selectCurrency, getExchangeRate, toggleHistory} from '../actions';
import { INITIAL_DATA } from './currencyTestData';
import reducer from '../reducers';
import store from '../store';

describe('--- Reducers ---', () => {

    test('Reducer immutability test', () => {
        const uid = 2;
        const key = 'from';

        //ADD_TO_CONVERTER
        reducer(INITIAL_DATA ,selectCurrency(uid,key));
        //GET_EXCHANGE_RATE
        reducer(INITIAL_DATA, getExchangeRate());
        //TOGGLE_HISTORY
        reducer(INITIAL_DATA, toggleHistory());

        expect(INITIAL_DATA).toEqual(INITIAL_DATA);
    });

    test('Load initial data', ()=>{
        expect(reducer(undefined ,loadData(INITIAL_DATA))).toEqual(INITIAL_DATA);
    });


    test('From - Select a currency', () => {
        const uid = 2;
        const key = 'from';
        expect(reducer(INITIAL_DATA ,selectCurrency(uid,key)).currencies.find((x) => x.uid === uid)[key]).toBeTruthy();
    });


    test('To - Select a currency', () => {
        const uid = 3;
        const key = 'to';
        expect(reducer(INITIAL_DATA ,selectCurrency(uid,key)).currencies.find((x) => x.uid === uid)[key]).toBeTruthy();
    });


    test('Get exchange rate', () => {
        const fromExpected = INITIAL_DATA.currencies.find((currency) => currency.from );
        const toExpected = INITIAL_DATA.currencies.find((currency) => currency.to );
        const exchangeRateExpected = ((from, to) => {
            return ( to / from ).toFixed(2)
        })(fromExpected.index, toExpected.index);
        const lastWeekHistoryExpected = ((fromHistory, toHistory) => {
            return fromHistory.map((day,index) => {
                if(fromHistory[index] && toHistory[index]){
                    return ( toHistory[index] / fromHistory[index] ).toFixed(7)
                }else{
                    return 0;
                }
            })
        })(fromExpected.lastWeek, toExpected.lastWeek);

        const nextState = reducer(INITIAL_DATA, getExchangeRate());

        expect(nextState.converter.from).toEqual(fromExpected);
        expect(nextState.converter.to).toEqual(toExpected);
        expect(nextState.converter.exchangeRate).toBe(exchangeRateExpected);
        expect(nextState.converter.lastWeekHistory).toEqual(lastWeekHistoryExpected);
    });

    test('toggle History', () => {
        expect(reducer(INITIAL_DATA, toggleHistory()).converter.showHistory).toBeFalsy();
    });

})
