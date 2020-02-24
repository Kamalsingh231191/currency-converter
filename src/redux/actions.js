
export const ACTIONS = {
    LOAD_DATA: 'LOAD_DATA',
    ADD_TO_CONVERTER: 'ADD_TO_CONVERTER',
    GET_EXCHANGE_RATE: 'GET_EXCHANGE_RATE',
    GET_HISTORY: 'GET_HISTORY',
    TOGGLE_HISTORY: 'TOGGLE_HISTORY'
}

/*
* Updating Initial state
*/
export function loadDate(data){
    return{
        type: ACTIONS.LOAD_DATA,
        data
    }
}

/*
* Updating selected currency
*/
export function selectCurrency(index,key){
    return {
        type: ACTIONS.ADD_TO_CONVERTER,
        index,
        key
    }
}

export function getExchangeRate(){
    return{
        type: ACTIONS.GET_EXCHANGE_RATE
    }
}

export function getHistory(){
    return{
        type: ACTIONS.GET_HISTORY
    }
}

export function toggleHistory(){
    return{
        type: ACTIONS.TOGGLE_HISTORY
    }
}

