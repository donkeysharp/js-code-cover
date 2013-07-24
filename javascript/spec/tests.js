describe("Person class", function() {
  // var person = new Donkeysharp.Person('Sergio', 23);
  /*it("New Person", function() {
    person = new Donkeysharp.Person('Sergio', 23);
    expect(person !== null).toBe(true);
  });*/
  it("Say Hello for Sergio", function() {
    var person = new Donkeysharp.Person('Sergio', 23);
    var res = person.sayHello();

    expect(res).toBe('Hello Sergio');
  });
  it("Say Hello for other", function() {
    var person = new Donkeysharp.Person('Fernando', 23);
    var res = person.sayHello();

    expect(res).toBe('Holas');
  });
  it("Say Bye", function() {
    var person = new Donkeysharp.Person('Sergio', 23);

    expect(person.sayGoodBye()).toBe('Bye bye Sergio');
  });
  it("Next age", function() {
    var person = new Donkeysharp.Person('Sergio', 23);

    expect(person.nextAge()).toBe(24);
  });
});
