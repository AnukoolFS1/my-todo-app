import Context from "../Context/context"

const Listitem = ({ task, classs, index }) => {
    const { dispatch } = Context()

    return (
        <li
            className={`list-item-group text-white ${classs} p-3 border rounded display-6 d-flex justify-content-between`}>
            <p>{task}</p>
            <div>
                <button className="btn btn-danger mx-1" onClick={() => dispatch({ type: 'Delete', payload: index })}>delete</button>
                <button className="btn btn-success px-4">Edit</button>
            </div>
        </li>
    )
}

export default Listitem