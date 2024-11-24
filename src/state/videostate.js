class VideoPlay {
  constructor(state) {
    this.state = Object.create(Object.assign({ videoplayer: this }, state));
  }
  setState(state) {
    this.state = Object.create(Object.assign({ videoplayer: this }, state));
  }
}

const streaming = {
  pause() {
    return "스트리밍 중지";
  },
  play() {
    return "스트리밍 재생";
  },
  changeBrand() {
    this.videoplayer.setState(brand);
  },
};
const brand = {
  pause() {
    return "브랜드 중지";
  },
  play() {
    return "don`t use";
  },
  changeStreaming() {
    this.videoplayer.setState(streaming);
  },
};

const videoState = new VideoPlay(streaming);
console.log(videoState.state.play());
console.log(videoState.state.pause());
videoState.state.changeBrand();
console.log(videoState.state.play());
console.log(videoState.state.pause());
videoState.state.changeStreaming();
console.log(videoState.state.play());
console.log(videoState.state.pause());
