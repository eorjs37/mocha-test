class StreamingPlayer {
  constructor(video) {
    this.video = video;
  }
  play() {
    console.log("play");
  }
  pause() {}
  onMute() {}
  volumeUp() {}
  volumeDown() {}
}

//decorator
function decorator1(player) {
  const brandPlayer = Object.create(player);

  brandPlayer.brandPlay = function () {
    console.log("brand play");
  };
  return brandPlayer;
}

const streamingplayer = new StreamingPlayer("video");
const brandPlayer = decorator1(streamingplayer);
brandPlayer.brandPlay();
brandPlayer.play();
