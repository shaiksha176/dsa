class A {
  constructor() {
    this.head = 0;
    this.size = 0;
  }
  changeHead() {
    this.head = { name: "lorem" };
  }
}

let a = new A();
a.changeHead();

console.log(a);
