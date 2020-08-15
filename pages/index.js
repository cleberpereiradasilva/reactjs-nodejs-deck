import {List, Video} from "../src/component/Youtube"

const index = ({channel, video}) => (
        <div>
            <h1>Lista</h1>
            <List data={channel} />
            <h1>Video</h1>
            <Video data={video}/>
        </div>
)


export async function getStaticProps() {
  const responseChannel = await fetch('http://localhost:3000/api/youtube/channel/spacex');
  const channel = await responseChannel.json();


  const responseVideo = await fetch('http://localhost:3000/api/youtube/video/IjMESxJdWkg');
  const video = await responseVideo.json();

  return {
    props: {
        channel,
        video
    },
  }
}
export default index;
