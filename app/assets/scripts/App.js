function person(name, favColor) {
  console.log("Hello, my name is " + name + " and my favourite color is " + favColor + ".");
}

var john = {
  name: "John Doe",
  favouriteColor: "blue"
}
person(john.name, john.favoriteColor);
person("Jane Smith", "green");
