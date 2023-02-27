import _ from "lodash";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(onGetTime, 1000));

function onGetTime() {
    const currentTime = player.getCurrentTime().then(function(seconds) {
        // console.log(seconds);
        const time = Math.round(seconds);
        localStorage.setItem("videoplayer-current-time", time);
    }).catch(function(error) {
        // an error occurred
    });
}

function onSetTime() {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}
onSetTime();