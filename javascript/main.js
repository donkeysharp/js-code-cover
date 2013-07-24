Donkeysharp = {};
Donkeysharp.Person = function(name, age) {
  console.log('Person class');
  this.name = name;
  this.age = age;
};
Donkeysharp.Person.prototype = {
  sayHello: function() {
    if(this.name === 'Sergio')
      return 'Hello ' + this.name;
    return 'Holas';
  },
  sayGoodBye: function() {
    return 'Bye bye ' + this.name;
  },
  nextAge: function() {
    return this.age + 1;
  }
};
