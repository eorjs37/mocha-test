class Video {
  constructor(playAction) {
    this.playAction = playAction;
  }
  play() {
    if (!this.playAction) {
      console.log("No have a PlayAction");

      return;
    }

    this.playAction();
  }
}

class StreamingVideo {
  playVideo() {
    console.log("Play StreamingVideo");
  }
}

class BrandVideo {
  playVideo() {
    console.log("Play BrandVideo");
  }
}

class CarPurPoseVideo {
  playVideo() {
    console.log("Play CarPurPoseVideo");
  }
}

const streamingvideo = new StreamingVideo();
const brandvideo = new BrandVideo();
const carpurposevideo = new CarPurPoseVideo();
const video1 = new Video(streamingvideo.playVideo);
const video2 = new Video(brandvideo.playVideo);
const video3 = new Video(carpurposevideo.playVideo);

video1.play();
video2.play();
video3.play();
