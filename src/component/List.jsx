import Listitem from "./Listitem"

const List = ({todo}) => {

    return (<ul className='list-group container'>
    {
        todo?.map((elem,i) => {
           return <Listitem 
            index={i}
            key={Math.random()*10+Math.random()}
            task={elem}
            classs={i%2===0?'bg-primary':'bg-info'}
             />
        })
    }
    </ul>)
}

export default List