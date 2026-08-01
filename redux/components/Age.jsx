import {useDispatch} from "react-redux"

function Age(){

    const dispatch=useDispatch();
    function increment(){
        dispatch({type:"INCREMENT_AGE"})
    }
    return(
        <div className="container">
            <div className="child">
                <h1>Age </h1>
                <button onClick={increment}>Increment</button>
                <button onClick={()=>{
                    dispatch({type:"DECREMENT_AGE"})
                }}>Decrement</button>
            </div>
        </div>
    )

}

export default Age