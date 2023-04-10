import Axios from "axios";

const key = 'AIzaSyDTXTDC2A2VJGDVvxN2rtPU-g5RU_KICIQ';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: key,
        type: "video",
        order: "viewCount"
    },
  
    
})
