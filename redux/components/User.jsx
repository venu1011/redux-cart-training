import {useDispatch} from 'react-redux';
function User(){
    const dispatch=useDispatch();   
    function loadusers(){
        console.log("loadusers")
        return async (dispatch,getState)=>{
            console.log("getState",getState())
            dispatch({type:"FETCH_USER_REQUEST"})
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users/")
                const data=await response.json();
                dispatch({type:"FETCH_USER_SUCCESS",payload:data})
            }catch(err){
                dispatch({type:"FETCH_USER_FAILURE",error:err.message})
            }
        }
    }
    return(
        <div className='Container'>
            <div className='child'>
                <button onClick={()=>dispatch(loadusers())}> Load users</button>
            </div>
        </div>
    )
}

export default User 