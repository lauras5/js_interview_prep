var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = () => {
  console.log("I hear a scream!");
};

var noScreamHandler = () => {
  console.log("Nobody hears your screams.");
};

//Assign the eventhandler to an event:
eventEmitter.on("scream", myEventHandler);
eventEmitter.on("no scream", noScreamHandler);

//Fire the 'scream' event:
eventEmitter.emit("no scream");
eventEmitter.emit("scream");
