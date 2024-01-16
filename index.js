const fs = require('fs');
const ytdl = require('ytdl-core');
let a = "https://www.youtube.com/watch?v=T9R-NPhRi1M"
let url = document.getElementById("video").url;
ytdl(a).pipe(fs.createWriteStream(`${url}.mp4`))
