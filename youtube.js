  
  




var Main_video_div = document.getElementById("content")


async function GetData() {

    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?order=viewCount&key=AIzaSyAlBoLo0ywbcxamg5Tjyl77nfWGwNdHcKI&maxResults=20`);
    

    let data = await res.json();

    var video_div = document.createElement("div");
    video_div.id ="video_div"
    

    for (let item of  data.items) {
        var iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${item.id.videoId}`
    
        video_div.append(iframe)

        Main_video_div.append(video_div)

    }
}


GetData()

