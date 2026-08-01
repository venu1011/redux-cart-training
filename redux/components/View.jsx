import {useSelector} from "react-redux"
function View(){
    const age=useSelector((state)=>state.age.age)
    const count = useSelector((state)=>state.count.count)
    const user=useSelector((state)=>state.userInfo.user)
    const loading = useSelector((state)=>state.userInfo.loading)
    const error = useSelector((state)=>state.userInfo.error)
    return (
        <div className="container">
            <div>
                <h1>View</h1>
                <h2><b>Age:</b>{age}</h2>
                <h2><b>Count:</b>{count}</h2>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {user && (
                    user.map((i)=>{
                        return(
                            <div key={i.id}>
                                <h1>{i.name}</h1>
                                <h2>{i.email}</h2>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
export default View