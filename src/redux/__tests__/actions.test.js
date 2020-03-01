import { ACTIONS, loadData, selectCurrency, getExchangeRate, toggleHistory} from '../actions.js';
import { INITIAL_DATA } from './currencyTestData';

describe('--- Actions ---', () => {

    /*testing load data*/
    test('test_load_data', () => {
        expect(loadData(INITIAL_DATA)).toEqual({
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

    test('test_toggle_history', () => {
        expect(toggleHistory()).toEqual({
            type: ACTIONS.TOGGLE_HISTORY
        })
    })

})