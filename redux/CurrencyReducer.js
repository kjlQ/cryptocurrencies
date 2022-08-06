const defaultState = {
    count:0,
    currencies:[]
}

export const reducer = (state=defaultState,action) => {
    switch (action.type) {
        case "COUNTER" :
            return {...state,count:state.count+action.payload}
        case "CURRENCIES" :
            return {...state,currencies:action.payload}
        default :
            return state
    }
}