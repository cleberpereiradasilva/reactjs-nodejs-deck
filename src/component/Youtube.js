const List = ({data}) => {
    const getList = list => list.map(item => <li key={item.videoId}>{item.videoId}</li>)
    return(
        <div>
            <ol> {getList(data) } 
            </ol>
        </div>
    )
}

const Video = ({data}) => {
    console.log(data.title);
    return(
        <div>
            <h1>{data.title.runs[0].text}</h1>
            <h2>VideoId</h2>
        </div>
    )
}
export { List, Video };
