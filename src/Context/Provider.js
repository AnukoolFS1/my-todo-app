import store from "./store";
import { useReducer, useState } from "react";
import Reducer from "./Reducer";


const Provider = ({ children }) => {
    const [todo, dispatch] = useReducer(Reducer, []);
    let [data, setData] = useState('');
    const [btnState, setBtnState] = useState(false);
    const [index, setIndex] = useState(null)

    return (
        <store.Provider value={{ todo, dispatch, data, setData, btnState, setBtnState, index, setIndex}}>
            {children}
        </store.Provider>
    )
}

export default Provider