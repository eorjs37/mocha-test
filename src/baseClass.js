class Dog {
  constructor(params) {
    this.params = params;
  }
  print(params) {
    return params;
  }
}

class OneDog extends Dog {
  constructor(params) {
    super(params);
    this.params = params;
  }

  print(params) {
    return super.print(Object.assign(this.params, params));
  }
}

const newDog = new OneDog({ name: "dog", age: 11 });
console.log(newDog.print({ name: "dog1", age: 12 }));
