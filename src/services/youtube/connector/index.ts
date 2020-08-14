
const GoToUrl = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { owner : json.owner }
}

export default GoToUrl;
