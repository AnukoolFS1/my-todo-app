import Context from "../Context/context"

const Listitem = ({ task, classs, index }) => {
    const { dispatch, setData, btnState, setBtnState, setIndex } = Context();


    const edit = (e) => {
        setBtnState(!btnState);
        setIndex(index)
        if (btnState) setData('');
        else setData(task);

    }

    return (
        <li
            className={`list-item-group text-light ${classs} p-3 border rounded display-6 d-flex justify-content-between`}>
            <p>{task}</p>
            <div>
                <button className="btn btn-danger mx-1" onClick={() => dispatch({ type: 'Delete', payload: index })}>Delete</button>
                <button
                    className="btn btn-success px-4"
                    onClick={edit}>
                    Edit
                </button>
            </div>
        </li>
    )
}

export default Listitem