import Input from "./component/Input"
import List from "./component/List";
import Context from "./Context/context";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

    const {todo,dispatch} = Context()

    return (<>
        <Input todo={todo} />
        <List dispatch={dispatch} />
    </>)
}

export default App