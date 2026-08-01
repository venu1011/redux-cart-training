import {Provider} from "react-redux"
import store from "../store/Store.js"
import Counter from "../components/Counter.jsx"
import Age from "../components/Age.jsx"
import View from "../components/View.jsx"
import User from "../components/User.jsx"

function App() {
  

  return (
    <>
    <Provider store={store}>
      <View/>
      <Age/>
      <Counter/>
      <User/>

    </Provider>
    </>

  )
}

export default App
