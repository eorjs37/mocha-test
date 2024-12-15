class NewsAgency {
  constructor() {
    this.news = "";
    this.observers = [];
  }

  // method to register observers
  addObservers(observer) {
    this.observers.push(observer);
  }

  // method to remove observers
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // method to notify all observers
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  // method to set new news and notify all observers
  setNews(news) {
    this.news = news;
    this.notifyObservers();
  }
}

class Observer {
  update(news) {}
}

class NewChannel1 extends Observer {
  update(news) {
    console.log(`News Channel 1: ${news}`);
  }
}

class NewsChannel2 extends Observer {
  update(news) {
    console.log(`News Channel 2: ${news}`);
  }
}

const agency = new NewsAgency();

//create channel
const channel1 = new NewChannel1();
const channel2 = new NewsChannel2();

agency.addObservers(channel1);
agency.addObservers(channel2);

agency.setNews(`Breaking News: Earthquake hits the city`);

setTimeout(() => {
  agency.setNews(`회의를 요청합니다`);
}, 5000);
