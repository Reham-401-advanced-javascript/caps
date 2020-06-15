const events = require('./events');

events.on('pickup', (payload)=> logIt('pickup', payload));
events.on('in-transit', (payload)=> logIt('in-transit', payload));
events.on('delivered', (payload)=> logIt('delivered', payload));

function logIt(event, payload){
  const time = new Date();
  console.log({event, time, payload});
}

module.exports = logIt;