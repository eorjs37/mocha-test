class Target {
  hello() {
    console.log("hello");
  }
  goodbye() {
    console.log("goodbye");
  }
}

class Adaptee {
  hi() {
    console.log("hi");
  }
  bye() {
    console.log("bye");
  }
}

const formal = new Target();
formal.hello();
formal.goodbye();

const casual = new Adaptee();
casual.hi();
casual.bye();

class Adapter {
  constructor(adpatee) {
    this.hello = adpatee.hi;
    this.goodbye = adpatee.bye;
  }
}

const adaptedCasual = new Adapter(new Adaptee());
adaptedCasual.hello();
adaptedCasual.goodbye();
