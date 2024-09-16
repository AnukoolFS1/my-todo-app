import { useEffect } from "react";
import Context from "../Context/context";

const Input = ({ dispatch }) => {
    let { data, setData, btnState, setBtnState, index } = Context()

    const value = (e) => {
        setData(e.target.value)
    }

    const add = () => {
        dispatch({ type: "ADD", payload: data });
        setData('')
    }

    const Edit = () => {
        dispatch({ type: "Edit", payload: data, index });
        setData('');
        setBtnState(false);
    }


    useEffect(() => {
        function listener(e) {
            if (e.key === 'Enter') {
                if (btnState) {
                    Edit()
                } else {
                    add()
                }
            }
        }
        window.addEventListener('keydown', listener)

        return () => window.removeEventListener('keydown', listener)
    })


    return (
        <div className="container my-5 d-flex">
            <input
                type="text"
                className="form-control"
                onChange={value}
                value={data}
            />
            {btnState ?
                <button className="col-2 btn btn-primary mx-2" onClick={Edit}>
                    Edit
                </button> :
                <button className="col-2 btn btn-primary mx-2" onClick={add}>
                    Add
                </button>
            }
        </div>
    )
}

export default Input