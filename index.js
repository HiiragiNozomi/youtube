const fs = require('fs');
const ytdl = require('ytdl-core');
let url = document.getElementById("video").url;
ytdl(url).pipe(fs.createWriteStream(`${url}.mp4`))