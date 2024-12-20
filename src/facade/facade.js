const page = {
  say(string) {
    console.log(string);
  },
  yell(string) {
    alert(string);
  },
  addNewLine() {
    document.body.appendChild(document.createElement("br"));
  },
  addButton(text) {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(text));
    document.body.appendChild(button);
  },
  addText(text) {
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(text));
    document.body.appendChild(span);
  },
  changeBackGround(color) {
    document.body.style.background = color;
  },
  now(asNumber = false) {
    if (asNumber === false) {
      return new Date().toLocaleString();
    } else {
      return new Date().getTime();
    }
  },
  timeOnPage() {
    return (this.now(true) - this._start) / 1000 + "seconds";
  },
  loadTime() {
    return (this._start - this._loaded) / 1000 + "seconds";
  },
  eventsSoFar() {
    console.log(this._events);
  },
  _events: [],
  _start: "noting yet",
  _loaded: "noting yet",
};

window.onload = function () {
  page._start = page.now(true);
  page._loaded = performance.timing.navigationStart;
  document.onclick = function (event) {
    page._events.push(event.target + " clicked at " + page.now());
  };
};
