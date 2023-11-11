class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */

  //Event variable to store all the events with their callbacks in an object
  events = {};

  subscribe(eventName, callback) {
    //if the event is not present in the events object then create an empty array for that event
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    //push the callback to the array of the event
    this.events[eventName].push(callback);
    //return an object with unsubscribe function  which will remove the callback from the array of the event
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (eventCallback) => eventCallback !== callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    //if the event is not present in the events object then return an empty array
    if (!this.events[eventName]) {
      return [];
    }
    //else loop through the array of the event and call the callback with the arguments
    return this.events[eventName].map((eventCallback) =>
      eventCallback(...args)
    ); //return the array of the return values of the callbacks
  }
}

const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);
console.log(emitter.emit("onClick")); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit("onClick")); // []
