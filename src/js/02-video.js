import _ from "lodash";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timeData = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', _.throttle(onGetTime, 1000));

function onGetTime(data) {
    const timeData = Math.round(data.seconds);
    localStorage.setItem("videoplayer-current-time", timeData);
};

if (timeData) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}
