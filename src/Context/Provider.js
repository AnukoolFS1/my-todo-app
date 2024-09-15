import store from "./store";
import { useReducer } from "react";
import Reducer from "./Reducer";


const Provider = ({ children }) => {
    const [todo, dispatch] = useReducer(Reducer, []);
    return (
        <store.Provider value={{ todo, dispatch }}>
            {children}
        </store.Provider>
    )
}

export default Provider