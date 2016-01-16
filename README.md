# Monty Hall Simulation

Demo: [http://codepen.io/mladenilic/full/VeMdLX/](http://codepen.io/mladenilic/full/VeMdLX/)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

### About the problem

_Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?_

### Options

```js
{
  interval: 1, // Number of miliseconds between rounds
  change_door: false, // Is door changed
  on_update: function (count, goats, cars) {}, // Called after every round
  on_start: function () {},  // Called after simulation is started
  on_stop: function () {}, // Called after simulation is stopped
  on_reset: function () {}, // Called after simulation score is reseted
}
```
