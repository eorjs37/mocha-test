class Video {
  constructor(videoType) {
    this.videoType = videoType;
  }
  play() {
    if (this.videoType === "Streaming") {
      console.log("Play StreamingVideo");
    } else if (this.videoType === "BrandVideo") {
      console.log("Play BrandVideo");
    } else {
      console.log("Play CarPurPoseVideo");
    }
  }
}

const video1 = new Video("Streaming");

const video2 = new Video("BrandVideo");

const video3 = new Video("CarPurPose");

video1.play();
video2.play();
video3.play();
