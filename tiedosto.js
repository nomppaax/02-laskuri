const arto = {
  name: "Arto Hellas",
  greet: function () {
    console.log("hello, my name is", this.name);
  },
};

setTimeout(arto.greet.bind(arto), 1000);
// sekunnin päästä tulostuu hello, my name is Arto Hellas
