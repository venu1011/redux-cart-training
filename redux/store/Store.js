import {combineReducers,legacy_createStore as createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'

const ageReducer = (state={age:22},action)=>{
    console.log("ageReducer",state,action)
    if(action.type==="INCREMENT_AGE"){
        return {...state,age:state.age+1}
    }
    if(action.type==="DECREMENT_AGE"){
        return {...state,age:state.age-1}
    }
    return state;
}
const userInfoReducer=(state={loading:false,user:null,error:null},action)=>{
    switch(action.type){
        case "FETCH_USER_REQUEST":
            return {...state,loading:true}
        case "FETCH_USER_SUCCESS":
            return {...state,loading:false,user:action.payload}
        case "FETCH_USER_FAILURE":
            return {...state,loading:false,error:action.error}
        default:
            return state;
    }
}

const countReducer=(state={count:0},action)=>{
    if(action.type==="INCREMENT_COUNT"){
        return {...state,count:state.count+1}
    }
    if(action.type==="DECREMENT_COUNT"){
        return {...state,count:state.count-1}
    }
    return state;
}
const rootReducer=combineReducers({
    age:ageReducer,
    count:countReducer,
    userInfo:userInfoReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;