import { ACTIONS, loadData, selectCurrency, getExchangeRate, getHistory, toggleHistory} from '../actions.js';
import { INITIAL_DATA } from './currencyTestData';

describe('actions', () => {
    let initData = INITIAL_DATA;

    /*testing load data*/
    test('test_load_data', () => {
        expect(loadData(initData)).toEqual({
            type: ACTIONS.LOAD_DATA,
            data: INITIAL_DATA
        });
    });

    test('test_select_currency_from', () => {
        expect(selectCurrency(0,'from')).toEqual({
            type: ACTIONS.ADD_TO_CONVERTER,
            uid: 0,
            key: 'from'
        })
    })

    test('test_select_currency_to', () => {
        expect(selectCurrency(1,'to')).toEqual({
            type: ACTIONS.ADD_TO_CONVERTER,
            uid: 1,
            key: 'to'
        })
    })

    test('test_get_exchange_rates', () => {
        expect(getExchangeRate()).toEqual({
            type: ACTIONS.GET_EXCHANGE_RATE
        })
    })

    test('test_get_history', () => {
        expect(getHistory()).toEqual({
            type: ACTIONS.GET_HISTORY
        })
    })

    test('test_toggle_history', () => {
        expect(toggleHistory()).toEqual({
            type: ACTIONS.TOGGLE_HISTORY
        })
    })

})