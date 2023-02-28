import _ from "lodash";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(onGetTime, 1000));

function onGetTime(data) {
    const time = Math.round(data.seconds);
    localStorage.setItem("videoplayer-current-time", time);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
