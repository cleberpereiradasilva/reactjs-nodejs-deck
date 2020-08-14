import React, { useState, useEffect } from 'react';
import { GetDataChannel } from "../service/connector/youtube"


const Video =  ({content}) => {
    //const [videos, setVideos] = useState([]);
    useEffect(async () => {
       const data = await GetDataChannel('spacex')
       console.log(data)
    });

    return <div>{
        content
    }**</div>
}

export default Video
