const List = ({data}) => {
 console.log(data)
 const getList = list => list.map(item => <li>{item.videoId}</li>)

 return(
    <div>
        <ol> {getList(data) } 
        </ol>

    </div>
)}
export default List;
