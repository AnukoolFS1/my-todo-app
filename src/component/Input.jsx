import { useEffect, useState } from "react"

const Input = ({ dispatch }) => {
    let [data, setData] = useState('')

    const value = (e) => {
        setData(e.target.value)
    }

    const add = () => {
        dispatch({ type: "ADD", payload: data });
        setData('')
    }


    useEffect(()=>{
        function listener(e){
            if(e.key === 'Enter'){
                add()
            }
        }
        window.addEventListener('keydown', listener)

        return ()=>window.removeEventListener('keydown', listener)
    })

   
    return (
        <div className="container my-5 d-flex">
            <input
                type="text"
                className="form-control"
                onChange={value}
                value={data}
                 />
            <button
                className="col-2 btn btn-primary mx-2"
                onClick={add}
            >Add</button>
        </div>
    )
}

export default Input