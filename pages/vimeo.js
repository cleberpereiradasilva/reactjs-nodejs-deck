import {List, Video} from "../src/component/Youtube"

const index = ({channel, video}) => (
        <div>
            <h1>Vimeo</h1>
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
