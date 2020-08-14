import List from "../src/component/Youtube"

const index = ({data}) => (
        <div>
            <h1>Lista</h1>
            <List data={data} />
        </div>
)


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  const response = await fetch('http://localhost:3000/api/youtube/channel/spacex');
  const data = await response.json();

  return {
    props: {
        data,
    },
  }
}
export default index;
