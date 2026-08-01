import {useDispatch} from "react-redux"

function Counter(){
    const dispatch=useDispatch();
    function asyncincrement(){
        return dispatch(async (dispatch,getState)=>{
            console.log("getState",getState())
            await new Promise((r)=>setTimeout(r,3000))
            dispatch({type:"INCREMENT_COUNT"})
        })
    }
    return(
        <div className="container">
            
            <div className="child">
                <h1>The Counter App </h1>
                <button onClick={()=>{
                    dispatch({type:"INCREMENT_COUNT"})
                }}>Increment</button>
                <button onClick={()=>{
                    dispatch({type:"DECREMENT_COUNT"})
                }}>Decrement</button>
                <button onClick={asyncincrement}>AsyncIncrement</button>
            </div>
        </div>
    )
}

export default Counter