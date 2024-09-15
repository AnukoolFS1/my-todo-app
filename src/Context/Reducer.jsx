const Reducer = (State = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...State,
                action.payload
            ]
        default:
            return [...State]
    }
}


export default Reducer