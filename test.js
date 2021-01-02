// Import fs module to write files into the filesystem, ytdl to download from youtube
const ytdl = require('ytdl-core');

// begin the download using a filter to download audio only format
// you can refer to quality and filter sections in README to learn more
const download = ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ', { filter: 'audioonly' });

// create a write stream to write the data from ytdl to disk
const writeStream = fs.createWriteStream('test.mp3'); // path eg. './audio.mp4'

// then pipe the download stream to the write stream, what this basically does
// is redirect whatever data comes out of download stream into the write stream
// thus writing it into disk
download.pipe(writeStream);

1