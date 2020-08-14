const List = ({data}) => {
 const { avatar_url } = data
 console.log(data)
 return(
    <div>
        <ol>
            <li> {avatar_url }</li>
            <li> item 1</li>
            <li> item 1</li>
            <li> item 1</li>
            <li> item 1</li>
            <li> item 1</li>
            <li> item 1</li>
        </ol>

    </div>
)}
export default List;
