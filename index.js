const redux = require('redux')
console.log(redux);

//State
const initState = {
    num : 0,
}


//Reducer
const rootReducer = (state = initState, action) =>{
    if(action.type === 'INC_NUM'){
        return{
            ...state,
            num: state.num+1
        }
    }

    if(action.type === 'ADD_NUM'){
        return{
            ...state,
            num: state.num + action.ChangeValue
        }
    }

    return state;
}

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());


// Subscribe
store.subscribe (() =>{
    console.log("[Subscribe]",store.getState());
});



// Dispatching Action
store.dispatch({
    type : 'INC_NUM',
});

store.dispatch({
    type : 'ADD_NUM',
    ChangeValue : 34,
});

console.log(store.getState());