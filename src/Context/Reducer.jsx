const Reducer = (State = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...State,
                action.payload
            ];
        case 'Delete':
            return State.filter((e, i) => i !== action.payload);

        case "Edit":
            return State.map((e, i) => {
                if (i !== action.index) return e;
                else return action.payload;
            })
        default:
            return State
    }
}


export default Reducer