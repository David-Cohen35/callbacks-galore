Function.prototype.myThrottle = function(interval) {
  let toSoon = false;
  return (...args) => {
    if (!tooSoon) {
      toSoon = true;
      setTimeout(() => tooSoon = false, interval);
      this(...args);
    }
  }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

const interval = setInterval(() => {
  neuron.fire();
}, 10);

clearInterval(interval);


neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);

class Neuron {
  constructor() {
    this.fire = this.fire.myThrottle(500);
  }

  fire() {
    console.log("Firing!");
  }
}
