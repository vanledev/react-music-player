const fetch = require('node-fetch');

async function getYoutubeVideoTitle(id){
const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.YOUTUBE_API_KEY}&fields=items(snippet(title))&part=snippet`)
const json = await res.json();
return json.items[0].snippet
}

export default getYoutubeVideoTitle;