function Player(state = new PlayState()) {
  this.state = state;
  this.change = (state) => {
    this.state = state;
  };
}

function PlayState() {
  this.play = () => {
    console.log("재생 상태라 재생 될 수 없음");
  };
  this.stop = (player) => {
    console.log("중지 요청");
    player.change(new StopState());
  };
}

function StopState() {
  this.play = (player) => {
    console.log("재생 요청");
    player.change(new new PlayState()());
  };
  this.stop = () => {
    console.log("중지 상태라 중지 될 수 없음");
  };
}

const player = new Player();
player.state.stop(player);

player.state.stop();
