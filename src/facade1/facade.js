const page = {
  say(string) {
    console.log(string);
  },
  yell(string) {
    console.log(string);
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
  changeBackground(color) {
    document.body.style.background = color;
  },
  now(asNumber = false) {
    if (!asNumber) {
      return new Date().toLocaleTimeString();
    } else {
      return new Date().getTime();
    }
  },
  timeOnPage() {
    return (this.now(true) - this._start) / 1000 + " seconds";
  },
  loadTime() {
    return (this.now(true) - this._loaded) / 1000 + " seconds";
  },
  _events: [],
  _start: "nothing yet",
  _loaded: "nothing yet",
};

window.onload = function () {
  page._start = page.now(true);
  page._loaded = performance.timing.navigationStart;
  document.onclick = function (event) {
    page._events.push(event.target + " clicked at " + page.now());
  };
};
